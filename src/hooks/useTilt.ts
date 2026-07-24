import { useEffect, useRef } from 'react';

/**
 * Subtle 3D tilt that follows the cursor. Disabled on touch devices and
 * when prefers-reduced-motion is set. Returns a ref to attach to the card.
 *
 * Usage:  const ref = useTilt();  <div ref={ref} className="tilt-parent">...</div>
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(maxDeg = 6) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduce || coarse) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${px * maxDeg}deg) rotateX(${-py * maxDeg}deg) translateZ(0)`;
    };
    const onLeave = () => {
      el.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0)';
    };

    el.classList.add('tilt-card');
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [maxDeg]);

  return ref;
}
