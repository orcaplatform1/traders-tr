// Durum gostergesi: kendi etrafinda yavasca donen mikro halkalar + nabiz
export function StatusIndicator({ color = "currentColor" }: { color?: string }) {
  return (
    <span aria-hidden className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center" style={{ color }}>
      <svg viewBox="0 0 16 16" className="absolute inset-0 h-4 w-4" fill="none">
        <circle
          className="status-ring-outer"
          cx="8"
          cy="8"
          r="7"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="1.2 2.2"
          opacity="0.55"
        />
        <circle
          className="status-ring-inner"
          cx="8"
          cy="8"
          r="4.6"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="3 1.6 0.6 1.6"
          opacity="0.8"
        />
      </svg>
      <span className="status-pulse absolute h-1.5 w-1.5 rounded-full bg-current" />
      <span className="relative h-1.5 w-1.5 rounded-full bg-current" />
    </span>
  );
}
