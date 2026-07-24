import { motion } from 'framer-motion';
import { useTweetEmbed } from '../hooks/useTweetEmbed';
import type { XPost } from '../data';

export default function TweetCard({ post, index }: { post: XPost; index: number }) {
  const { containerRef, ready } = useTweetEmbed(post.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="mac-panel-hover group relative overflow-hidden rounded-3xl bg-black"
      style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 30px -12px rgba(0,0,0,0.5), 0 1px 0 0 rgba(255,255,255,0.04) inset' }}
    >
      {/* Category label */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="accent-gradient bg-clip-text text-xs font-medium uppercase tracking-[0.2em] text-transparent">
          {post.label}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-text-primary" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X
        </span>
      </div>

      {/* Embed slot. X's dark-theme iframe is pure black (#000), so the slot
          is pure black too — the embed blends seamlessly with no seam.
          The iframe is left at its natural width and centered. */}
      <div className="relative">
        <div ref={containerRef} className="tweet-embed min-h-[200px]" />
        {!ready && (
          <div className="absolute inset-0 flex flex-col gap-3 p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 animate-pulse rounded-full bg-white/10" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-32 animate-pulse rounded-full bg-white/10" />
                <div className="h-2.5 w-20 animate-pulse rounded-full bg-white/5" />
              </div>
            </div>
            <div className="mt-2 h-3 w-full animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-5/6 animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-2/3 animate-pulse rounded-full bg-white/10" />
            <div className="mt-2 h-40 w-full animate-pulse rounded-xl bg-white/5" />
          </div>
        )}
      </div>

      {/* Open-in-X link */}
      <a
        href={`${post.url}?s=20`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-sm text-muted transition-colors hover:text-text-primary"
      >
        <span>Open post</span>
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
      </a>
    </motion.div>
  );
}
