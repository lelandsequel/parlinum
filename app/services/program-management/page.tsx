import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program & Project Management | Parlinum Consulting',
  description: 'Program management, project delivery, and construction project controls using PMI, PRINCE2, Agile, and Lean Six Sigma methodologies.',
};

const services = [
  { title: "Program Management", description: "Multi-project initiatives aligned with business objectives through structured governance." },
  { title: "Project Management", description: "Delivering projects on time and within budget using industry best practices." },
  { title: "Construction Project Scheduling", description: "Optimizing timelines and resource allocation to improve efficiency." },
  { title: "Construction Risk Management", description: "Identifying and mitigating risks related to cost, schedule, and quality." },
  { title: "Project Controls", description: "Cost tracking, forecasting, and performance oversight for better outcomes." },
  { title: "Permitting Process Management", description: "Navigating regulatory approvals to streamline project execution." }
];

const frameworks = ["PMI PgMP", "PMI PMP", "PRINCE2", "Agile (Scrum, SAFe)", "Lean Six Sigma", "Earned Value Management", "Critical Path Method", "ISO 21500"];

export default function ProgramManagementPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/" className="text-neutral-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">← Back Home</Link>
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Program & Project Management</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6">
            Complex initiatives.<br />
            <span className="text-neutral-500">Disciplined execution.</span>
          </h1>
          <div className="bg-[#0d1321] border border-white/10 p-8 max-w-3xl mt-12">
            <p className="text-lg text-neutral-300 leading-relaxed">
              We drive successful execution of complex initiatives by integrating strategy, 
              governance, and performance management — from IT transformations to construction projects.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={service.title} className="border border-white/10 p-6 hover:border-[#c9a227]/50 transition-colors">
                <div className="text-[#c9a227] text-sm font-mono mb-4">0{i + 1}</div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">Methodologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frameworks.map((f) => (
              <div key={f} className="border border-white/10 px-4 py-3 text-sm text-neutral-300">{f}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need program management support?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#c9a227] text-[#0a0f1a] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
