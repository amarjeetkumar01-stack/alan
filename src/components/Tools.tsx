import SectionHeader from './SectionHeader';

// Official brand logo images; each is paired with a visible tool name.
const TOOLS = [
  { name: 'ChatGPT', url: 'https://chat.openai.com', category: 'Assistant', logo: '/logos/openai.png' },
  { name: 'Claude', url: 'https://claude.ai', category: 'Assistant', logo: '/logos/anthropic.svg' },
  { name: 'Gemini', url: 'https://gemini.google.com', category: 'Assistant', logo: '/logos/googlegemini.svg' },
  { name: 'GLM', url: 'https://chatglm.cn', category: 'Model', logo: '/logos/glm.png' },
  { name: 'Cursor', url: 'https://cursor.com', category: 'Editor', logo: '/logos/cursor.svg' },
  { name: 'Perplexity', url: 'https://perplexity.ai', category: 'Search', logo: '/logos/perplexity.svg' },
  { name: 'NotebookLM', url: 'https://notebooklm.google.com', category: 'Research', logo: '/logos/google.svg' },
  { name: 'n8n', url: 'https://n8n.io', category: 'Automation', logo: '/logos/n8n.svg' },
  { name: 'OpenAI', url: 'https://openai.com', category: 'Lab', logo: '/logos/openai.png' },
  { name: 'Anthropic', url: 'https://anthropic.com', category: 'Lab', logo: '/logos/anthropic.svg' },
  { name: 'Hermes', url: 'https://nousresearch.com', category: 'Agent', logo: '/logos/hermes.png' },
  { name: 'Obsidian', url: 'https://obsidian.md', category: 'Notes', logo: '/logos/obsidian.svg' },
  { name: 'X', url: 'https://x.com', category: 'Social', logo: '/logos/x.svg' },
  { name: 'Midjourney', url: 'https://midjourney.com', category: 'Image', logo: '/logos/midjourney.png' },
  { name: 'Llama', url: 'https://llama.com', category: 'Model', logo: '/logos/llama.svg' },
  { name: 'Mistral', url: 'https://mistral.ai', category: 'Model', logo: '/logos/mistralai.svg' },
  { name: 'Groq', url: 'https://groq.com', category: 'Inference', logo: '/logos/groq.png' },
  { name: 'GitHub', url: 'https://github.com', category: 'Code', logo: '/logos/github.svg' },
];

export default function Tools() {
  return (
    <section id="tools" className="tools-section"><div className="shell section">
      <SectionHeader eyebrow="Daily stack" title="What I" highlight="use most." subtext="The AI models and tools I reach for every single day to research, build, and ship." />
      <div className="tools-grid">{TOOLS.map(tool => <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-card"><div className="tool-logo"><img src={tool.logo} alt="" loading="lazy" width="36" height="36" /></div><div><h3>{tool.name}</h3><p>{tool.category}</p></div><span className="tool-arrow" aria-hidden="true">↗</span></a>)}</div>
    </div></section>
  );
}
