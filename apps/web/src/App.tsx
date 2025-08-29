import { useEffect, useState } from "react";
import { useChatStore } from "./stores/chatstore";

export default function App() {
  const [msg, setMsg] = useState("");
  const { messages, load, subscribe, send, loading } = useChatStore();

  useEffect(() => {
    load('default');
    const unsub = subscribe('default');
    return () => unsub();
  }, [load, subscribe]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">U.M.M.M. vNext</h1>
        <div className="text-xs opacity-70">Phase 1B · Chat v1 (DB)</div>
      </header>

      <main className="mt-8 grid grid-cols-12 gap-4">
        {/* Left rail */}
        <aside className="col-span-12 md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-3">
          <div className="text-sm font-medium mb-2">Rooms</div>
          <ul className="space-y-2 text-sm">
            <li className="bg-zinc-800/60 rounded-xl px-3 py-2">default</li>
          </ul>
        </aside>

        {/* Center chat */}
        <section className="col-span-12 md:col-span-7 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-3">
          <div className="text-sm font-medium mb-2">Chat</div>

          <div className="h-[50vh] md:h-[60vh] overflow-auto rounded-xl bg-zinc-950/60 border border-zinc-800 p-3 space-y-3">
            {loading && <div className="text-xs opacity-70">Loading…</div>}
            {messages.map(m => (
              <div key={m.id} className={`text-sm ${m.author_type === 'user' ? 'text-zinc-100' : m.author_type === 'assistant' ? 'text-emerald-300' : 'text-zinc-400'}`}>
                <span className="mr-2 opacity-60">[{m.author_type}]</span>
                {m.content}
              </div>
            ))}
          </div>

          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => { e.preventDefault(); send(msg); setMsg(""); }}
          >
            <input
              value={msg}
              onChange={(e)=>setMsg(e.target.value)}
              placeholder="Type here…"
              className="px-3 py-2 bg-zinc-900 rounded-xl border border-zinc-800 w-full"
            />
            <button className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20">
              Send
            </button>
          </form>
        </section>

        {/* Right assistant */}
        <aside className="col-span-12 md:col-span-3 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-3">
          <div className="text-sm font-medium mb-2">Assistant</div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span>Tokens</span><span className="opacity-70">dev</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Emotion</span><span className="opacity-70">stub</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Provider</span><span className="opacity-70">—</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
