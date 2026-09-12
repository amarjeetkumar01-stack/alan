import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const SERVICES = [
  { num: '01', title: 'Brand Collaborations', desc: 'Strategic partnerships with AI, Crypto, and tech brands. Authentic campaigns that drive real engagement and awareness.' },
  { num: '02', title: 'AI Agent Development', desc: 'Custom AI agents with memory, tool calling, automation, and multi-step workflows built for creators, startups, and businesses.' },
  { num: '03', title: 'AI Content Strategy', desc: 'Content systems, launch campaigns, and growth strategies that help AI products reach the right audience.' },
  { num: '04', title: 'Crypto Partnerships', desc: 'Content marketing, product launches, community campaigns, ambassador programs, and long-term collaborations for Web3 projects.' },
];

export default function Services() {
  const reduced = useReducedMotion();
  return (
    <section id="services" className="shell section services-section">
      <SectionHeader eyebrow="Services" title="What I" highlight="offer." subtext="Partnering with AI, crypto, and tech brands to build, launch, and grow." action={<a href="#contact" className="text-link">Find your next move <span aria-hidden="true">↗</span></a>} />
      <div className="service-list">{SERVICES.map(service => <motion.a key={service.num} href="#contact" className="service-row" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.6 }}><span className="service-number">{service.num}</span><h3>{service.title}</h3><p>{service.desc}</p><span className="service-arrow" aria-hidden="true">↗</span></motion.a>)}</div>
    </section>
  );
}
