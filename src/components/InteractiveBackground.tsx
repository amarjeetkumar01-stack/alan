import { useEffect, useRef } from 'react';

/**
 * Site-wide interactive background (optimized):
 *  - Mouse-reactive glow + grid parallax in ONE rAF loop (not two)
 *  - Connected particles on canvas, capped at 24fps
 *  - Glow eases at 0.08 lerp (lighter computation)
 *  - Everything disabled on touch / reduced-motion
 *  - Canvas pauses when tab hidden
 */
export default function InteractiveBackground() {
  const glowRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (coarse || reduce) return; // static grid only on mobile/reduced-motion

    let glowX = window.innerWidth / 2;
    let glowY = window.innerHeight / 2;
    let curGlowX = glowX;
    let curGlowY = glowY;
    let gridTX = 0;
    let gridTY = 0;
    let visible = true;
    let raf = 0;

    // ---- Canvas particles ----
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    let pw = 0;
    let ph = 0;

    const resize = () => {
      pw = window.innerWidth;
      ph = window.innerHeight;
      canvas.width = pw * DPR;
      canvas.height = ph * DPR;
      canvas.style.width = pw + 'px';
      canvas.style.height = ph + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.min(30, Math.floor((pw * ph) / 45000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * pw,
        y: Math.random() * ph,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      }));
    };
    resize();
    window.addEventListener('resize', resize);

    // ---- Single unified input handler ----
    const onMove = (e: MouseEvent) => {
      glowX = e.clientX;
      glowY = e.clientY;
      gridTX = (e.clientX / window.innerWidth - 0.5) * 20;
      gridTY = (e.clientY / window.innerHeight - 0.5) * 20;
    };
    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) raf = requestAnimationFrame(loop);
    };

    // ---- ONE loop for glow + grid + particles ----
    let lastParticleFrame = 0;
    const PARTICLE_INTERVAL = 1000 / 24; // 24fps cap for particles

    const loop = (t: number) => {
      if (!visible) return;
      raf = requestAnimationFrame(loop);

      // glow + grid (cheap, runs every frame)
      curGlowX += (glowX - curGlowX) * 0.08;
      curGlowY += (glowY - curGlowY) * 0.08;
      if (glowRef.current)
        glowRef.current.style.transform = `translate3d(${curGlowX - 300}px, ${curGlowY - 300}px, 0)`;
      if (gridRef.current)
        gridRef.current.style.transform = `translate3d(${gridTX}px, ${gridTY}px, 0)`;

      // particles (throttled to 24fps)
      if (t - lastParticleFrame < PARTICLE_INTERVAL) return;
      lastParticleFrame = t;

      ctx.clearRect(0, 0, pw, ph);
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > pw) p.vx *= -1;
        if (p.y < 0 || p.y > ph) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232, 232, 234, 0.3)';
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = dx * dx + dy * dy;
          if (dist < maxDist * maxDist) {
            const d = Math.sqrt(dist);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(232, 232, 234, ${0.06 * (1 - d / maxDist)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        ref={gridRef}
        className="absolute inset-[-5%] dev-grid opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 85%)',
        }}
      />
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(232,232,234,0.06) 0%, transparent 60%)' }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />
      <div className="dev-noise" />
    </div>
  );
}
