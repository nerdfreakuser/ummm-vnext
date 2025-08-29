export default function ChaosMeter({ value = 0 }: { value?: number }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span>Chaos</span>
      <div className="w-24 h-2 bg-muted rounded">
        <div
          className="h-2 bg-foreground/60 rounded"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}
