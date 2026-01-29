import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology & Cybersecurity Services | Parlinum Consulting',
  description: 'Cybersecurity assessments, managed security services, and IT risk governance using NIST CSF, ISO 27001, and MITRE ATT&CK frameworks.',
};

const services = [
  {
    title: "Cybersecurity Assessments",
    description: "Identify and address security gaps through penetration testing, threat modelling, and compliance audits."
  },
  {
    title: "Managed Security Services",
    description: "Continuous monitoring, real-time threat detection, and rapid incident response."
  },
  {
    title: "IT Security Outsourcing",
    description: "Scalable solutions including cloud security, endpoint protection, and SOC services."
  },
  {
    title: "Enterprise Risk Management (Cyber)",
    description: "Structured risk frameworks to proactively assess and mitigate cyber threats."
  }
];

const frameworks = [
  "NIST Cybersecurity Framework (CSF)",
  "ISO/IEC 27001 & 27002",
  "CIS Critical Security Controls",
  "MITRE ATT&CK Framework",
  "NIST 800-53",
  "COBIT",
  "ISO 31000",
  "FAIR"
];

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/home" className="text-neutral-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">
            ← Back Home
          </Link>
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Technology & Cybersecurity</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6">
            Cyber threats evolve daily.<br />
            <span className="text-neutral-500">Your defenses should too.</span>
          </h1>
          
          <div className="bg-[#0d1321] border border-white/10 p-8 max-w-3xl mt-12">
            <p className="text-lg text-neutral-300 leading-relaxed">
              We strengthen cybersecurity resilience by identifying vulnerabilities, mitigating risks, 
              and ensuring compliance. Our team brings deep expertise using industry-leading frameworks 
              to protect your organization's critical assets.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frameworks & Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frameworks.map((framework) => (
              <div key={framework} className="border border-white/10 px-4 py-3 text-sm text-neutral-300">
                {framework}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Assess your security posture.</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Let's identify vulnerabilities before attackers do.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#c9a227] text-[#0a0f1a] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors">
            Schedule Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
