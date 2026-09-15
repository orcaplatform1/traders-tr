export function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(248,250,252,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,250,252,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />
    </div>
  );
}
