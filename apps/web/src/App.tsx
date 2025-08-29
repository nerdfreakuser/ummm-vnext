import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './lib/supabase';
import ShellLayout from './layout/ShellLayout';
import AuthGate from './components/AuthGate';
import Landing from './routes/Landing';
import RoomView from './routes/RoomView';
import ExpertsGallery from './routes/ExpertsGallery';
import CreateExpert from './routes/CreateExpert';
import Settings from './routes/Settings';
import TokenStore from './routes/TokenStore';
import Blog from './routes/Blog';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-6">Loading…</div>;
  if (!session) return <AuthGate />;

  return (
    <ShellLayout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room/:id" element={<RoomView />} />
        <Route path="/experts" element={<ExpertsGallery />} />
        <Route path="/experts/new" element={<CreateExpert />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tokens" element={<TokenStore />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </ShellLayout>
  );
}
