import { Link } from 'react-router-dom';

export default function LeftSidebar() {
  return (
    <div className="h-full p-3 space-y-4 text-sm">
      <div>
        <div className="text-xs uppercase opacity-60 mb-2">Rooms</div>
        <div className="space-y-1">
          <Link to="/room/placeholder" className="block px-2 py-1 rounded hover:bg-muted">Sample Room</Link>
        </div>
      </div>
      <div>
        <div className="text-xs uppercase opacity-60 mb-2">Experts</div>
        <div className="space-y-1">
          <Link to="/experts" className="block px-2 py-1 rounded hover:bg-muted">Gallery</Link>
        </div>
      </div>
      <div>
        <div className="text-xs uppercase opacity-60 mb-2">Library</div>
        <div className="space-y-1">
          <button className="w-full text-left px-2 py-1 rounded hover:bg-muted">Docs</button>
          <button className="w-full text-left px-2 py-1 rounded hover:bg-muted">Exports</button>
        </div>
      </div>
      <div>
        <div className="text-xs uppercase opacity-60 mb-2">System</div>
        <div className="space-y-1">
          <Link to="/settings" className="block px-2 py-1 rounded hover:bg-muted">Settings</Link>
          <Link to="/tokens" className="block px-2 py-1 rounded hover:bg-muted">Token Store</Link>
        </div>
      </div>
    </div>
  );
}
