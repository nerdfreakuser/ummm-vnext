import { create } from 'zustand';
import type { RealtimeChannel } from '@supabase/supabase-js';
import { supabase } from '../src/lib/supabase';

export interface Message {
  id: string;
  room: string;
  author_type: string;
  content: string;
  created_at: string;
}

interface ChatState {
  messages: Message[];
  loading: boolean;
  load: (room: string) => Promise<void>;
  subscribe: (room: string) => () => void;
  send: (text: string) => Promise<void>;
}

let channel: RealtimeChannel | null = null;
let currentRoom: string | null = null;

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  loading: false,
  load: async (room: string) => {
    set({ loading: true });
    const { data } = await supabase
      .from('messages')
      .select('*')
      .eq('room', room)
      .order('created_at', { ascending: true });
    set({ messages: data ?? [], loading: false });
    currentRoom = room;
  },
  subscribe: (room: string) => {
    if (channel) {
      channel.unsubscribe();
    }
    channel = supabase
      .channel(`room:${room}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages', filter: `room=eq.${room}` },
        (payload) => {
          const msg = payload.new as Message;
          set({ messages: [...get().messages, msg] });
        }
      )
      .subscribe();
    currentRoom = room;
    return () => {
      channel?.unsubscribe();
      channel = null;
    };
  },
  send: async (text: string) => {
    if (!currentRoom) return;
    await supabase.from('messages').insert({
      room: currentRoom,
      content: text,
      author_type: 'user',
    });
  },
}));

export default useChatStore;
