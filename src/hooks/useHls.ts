import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

/**
 * Attaches an HLS stream to a <video> element.
 * Falls back to native HLS playback (Safari/iOS) when hls.js isn't supported.
 */
export function useHls(src: string) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = src;
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [src]);

  return videoRef;
}
