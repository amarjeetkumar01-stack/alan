import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

/**
 * Attaches an HLS stream to a <video> element.
 * Falls back to native HLS playback (Safari/iOS) when hls.js isn't supported.
 */
export function useHls(src: string, enabled = true) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) { video?.pause(); return; }
    let hls: Hls | null = null;
    let visible = false;
    const syncPlayback = () => {
      if (visible && !document.hidden) void video.play().catch(() => {});
      else video.pause();
    };
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, maxBufferLength: 15, capLevelToPlayerSize: true, autoStartLoad: false });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = src;
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) hls?.startLoad();
      else hls?.stopLoad();
      syncPlayback();
    });
    observer.observe(video);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
      if (hls) hls.destroy();
      else { video.removeAttribute('src'); video.load(); }
    };
  }, [src, enabled]);

  return videoRef;
}
