import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workforce Training & Staffing | Parlinum Consulting',
  description: 'Workforce development, talent acquisition, staffing, and business process outsourcing solutions.',
};

const services = [
  { title: "Workforce Training & Development", description: "Customized programs to upskill employees and enhance operational efficiency across technical, IT, and leadership domains." },
  { title: "Talent Acquisition & Staffing", description: "Data-driven recruitment to source, assess, and place top talent." },
  { title: "Workforce Planning & Management", description: "Skills gap analysis, succession planning, and resource optimization." },
  { title: "Business Process Outsourcing", description: "Scalable outsourcing solutions for HR, Finance, Customer Support, and IT functions." },
  { title: "Performance Management", description: "Frameworks to track performance, boost engagement, and reduce turnover." }
];

const frameworks = ["ADDIE", "Kirkpatrick Model", "ISO 29990", "ITIL", "ISO 30405", "SHRM Guidelines", "ISO 9001"];

export default function WorkforcePage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/home" className="text-neutral-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">← Back Home</Link>
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Workforce Training & Staffing</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6">
            Right talent.<br />
            <span className="text-neutral-500">Right skills. Right time.</span>
          </h1>
          <div className="bg-[#0d1321] border border-white/10 p-8 max-w-3xl mt-12">
            <p className="text-lg text-neutral-300 leading-relaxed">
              We provide end-to-end workforce solutions, from skill development to strategic staffing 
              and operational outsourcing — ensuring your organization has the talent it needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={service.title} className="border border-white/10 p-8 hover:border-[#c9a227]/50 transition-colors">
                <div className="text-[#c9a227] text-sm font-mono mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">Frameworks & Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frameworks.map((f) => (
              <div key={f} className="border border-white/10 px-4 py-3 text-sm text-neutral-300">{f}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Build your workforce capability.</h2>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#c9a227] text-[#0a0f1a] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
