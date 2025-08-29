import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <header className="h-14 border-b flex items-center px-3 justify-between">
      <div className="flex items-center gap-3">
        <Link to="/" className="font-bold">U.M.M.M.</Link>
        <nav className="hidden md:flex gap-3 text-sm">
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
      <div className="flex items-center gap-3 flex-1 justify-center max-w-md">
        <input className="px-3 py-1 rounded border w-full" placeholder="Search…" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs opacity-70">Tokens: —</span>
        <button className="w-8 h-8 rounded-full bg-muted" />
      </div>
    </header>
  );
}
