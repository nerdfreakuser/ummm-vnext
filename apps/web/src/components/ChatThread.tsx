export default function ChatThread() {
  return (
    <div className="p-3 space-y-3">
      <div className="rounded p-3 bg-muted/40">[system] Welcome to the room.</div>
      <div className="rounded p-3 bg-muted/20">[user] Hello experts!</div>
      <div className="rounded p-3 bg-muted">[expert] …</div>
    </div>
  );
}
