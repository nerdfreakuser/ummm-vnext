export default function InputBar() {
  return (
    <div className="p-3 flex items-center gap-2">
      <input className="flex-1 px-3 py-2 rounded border" placeholder="Type a message…" />
      <button className="px-3 py-2 rounded border">Ask</button>
      <button className="px-3 py-2 rounded border">Send</button>
    </div>
  );
}
