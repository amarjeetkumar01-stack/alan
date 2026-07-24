import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    twttr?: {
      _e?: unknown[];
      ready?: (cb: (twttr: { widgets: { createTweet: Function } }) => void) => void;
      widgets?: { createTweet: Function };
    };
  }
}

const SCRIPT_SRC = 'https://platform.twitter.com/widgets.js';
let loadPromise: Promise<void> | null = null;

/** Loads the X widgets.js script exactly once across the whole app. */
function loadScript(): Promise<void> {
  if (loadPromise) return loadPromise;
  loadPromise = new Promise((resolve) => {
    if (window.twttr?.widgets) {
      resolve();
      return;
    }
    const existing = document.getElementById('twitter-wjs') as HTMLScriptElement | null;
    const script = existing ?? document.createElement('script');
    if (!existing) {
      script.id = 'twitter-wjs';
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    const check = () => {
      if (window.twttr?.widgets) resolve();
      else requestAnimationFrame(check);
    };
    check();
  });
  return loadPromise;
}

/**
 * Renders an X/Twitter post embed into the target element.
 * Returns { ready } so the card can show a skeleton until loaded.
 */
export function useTweetEmbed(tweetId: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const el = containerRef.current;
    if (!el) return;

    setReady(false);
    el.innerHTML = '';

    loadScript().then(() => {
      if (cancelled || !window.twttr?.widgets) return;
      window.twttr.widgets.createTweet(
        tweetId,
        el,
        // theme:'dark' renders the iframe with a #000 background — we match it
        // on the slot so there is no seam. Do NOT stretch the iframe width:
        // X keeps internal content at ~480px and fills the rest with pure black,
        // which is what created the unwanted dark areas.
        { theme: 'dark', dnt: true, align: 'center', conversation: 'none' },
      ).then(() => {
        if (cancelled) return;
        // Center the embed at its natural width; don't touch its background
        // (it must stay pure black to blend with the slot).
        const bq = el.querySelector('blockquote.twitter-tweet') as HTMLElement | null;
        if (bq) {
          bq.style.margin = '0 auto';
        }
        setReady(true);
      }).catch(() => {
        if (!cancelled) setReady(true); // reveal fallback on error
      });
    });

    return () => {
      cancelled = true;
    };
  }, [tweetId]);

  return { containerRef, ready };
}
