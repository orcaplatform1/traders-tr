// Durum gostergesi: yanip sonen neon nokta + nabiz halkasi
export function StatusIndicator({ color = "currentColor" }: { color?: string }) {
  return (
    <span aria-hidden className="relative inline-flex h-2 w-2 shrink-0 items-center justify-center" style={{ color }}>
      <span className="status-pulse absolute h-2 w-2 rounded-full bg-current" />
      <span className="status-dot relative h-2 w-2 rounded-full bg-current" />
    </span>
  );
}
