// Durum gostergesi: hafif nefes alan nokta
export function StatusIndicator({ color = "currentColor" }: { color?: string }) {
  return (
    <span aria-hidden className="relative inline-flex h-1.5 w-1.5 shrink-0 items-center justify-center" style={{ color }}>
      <span className="status-breathe relative h-1.5 w-1.5 rounded-full bg-current" />
    </span>
  );
}
