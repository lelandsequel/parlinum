import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Risk Management | Parlinum Consulting',
  description: 'ERM consulting for healthcare payers, financial services, and higher education. Risk identification, compliance, business continuity using ISO 31000, COSO, and NIST frameworks.',
};

const industries = [
  {
    name: "Healthcare Payers",
    risks: ["Financial & Cost Risks", "Cybersecurity & Data Risks", "Regulatory Compliance", "Operational & Process Risks"],
    description: "Insurance companies, government programs, and employers face rising costs, fraud, and data security challenges."
  },
  {
    name: "Financial Services",
    risks: ["Cybersecurity & Data Risks", "Interest Rate & Liquidity", "Market & Credit Risks", "Fraud & Financial Crime"],
    description: "Banks, insurance companies, and credit unions operating in a dynamic environment with evolving threats."
  },
  {
    name: "Higher Education",
    risks: ["Enrollment & Competition", "Data Security", "Student Mental Health", "Regulatory Compliance"],
    description: "Institutions facing cyber threats, leadership crises, and growing competition in online learning."
  }
];

const frameworks = [
  "ISO 31000 (Risk Management)",
  "COSO ERM Framework",
  "NIST Risk Management Framework (RMF)",
  "FAIR (Factor Analysis of Information Risk)",
  "COBIT",
  "Basel III"
];

export default function ERMPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/home" className="text-neutral-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">
            ← Back Home
          </Link>
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Enterprise Risk Management</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6">
            Identify risks before<br />
            <span className="text-neutral-500">they identify you.</span>
          </h1>
          
          {/* Answer-First Block */}
          <div className="bg-[#0d1321] border border-white/10 p-8 max-w-3xl mt-12">
            <h2 className="text-sm uppercase tracking-widest text-[#c9a227] mb-4">What is ERM?</h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Enterprise Risk Management (ERM) is a structured approach to identifying, assessing, 
              and mitigating risks across an organization. We help clients build frameworks that 
              enhance resilience, ensure regulatory compliance, and maintain business continuity 
              when disruptions occur.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Approach</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Risk Identification & Assessment",
                desc: "Systematically identifying, categorizing, and prioritizing threats across the enterprise."
              },
              {
                num: "02",
                title: "Quantitative Risk Modelling",
                desc: "Applying data-driven tools and analytics to evaluate exposure and inform decision-making."
              },
              {
                num: "03",
                title: "Business Continuity Planning",
                desc: "Designing strategies to ensure operational resilience during disruptions and emergencies."
              },
              {
                num: "04",
                title: "Stakeholder Training",
                desc: "Building a culture of risk ownership through ongoing education and leadership engagement."
              }
            ].map((item) => (
              <div key={item.num} className="border border-white/10 p-6 hover:border-[#c9a227]/50 transition-colors">
                <div className="text-[#c9a227] text-sm font-mono mb-4">{item.num}</div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Industry Focus</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Specialized ERM for complex industries.
          </h2>
          
          <div className="space-y-12">
            {industries.map((industry) => (
              <div key={industry.name} className="grid md:grid-cols-3 gap-8 pb-12 border-b border-white/10 last:border-0">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
                  <p className="text-neutral-400">{industry.description}</p>
                </div>
                <div className="md:col-span-2">
                  <div className="text-xs uppercase tracking-widest text-neutral-600 mb-4">Key Risk Areas</div>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.risks.map((risk) => (
                      <div key={risk} className="border border-white/10 px-4 py-3 text-sm text-neutral-400">
                        {risk}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Proven frameworks.<br />
                <span className="text-neutral-500">Tailored implementation.</span>
              </h2>
              <p className="text-neutral-400 text-lg">
                We don't force-fit frameworks. We assess your organization's risk maturity, 
                regulatory requirements, and strategic objectives to determine the right 
                approach — then customize implementation to your context.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {frameworks.map((framework) => (
                <div key={framework} className="border border-white/10 px-4 py-3 text-sm text-neutral-300 hover:border-[#c9a227]/50 transition-colors">
                  {framework}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema Content */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8 max-w-3xl">
            {[
              {
                q: "What's the difference between ERM and traditional risk management?",
                a: "Traditional risk management typically addresses risks in silos (financial, operational, compliance). ERM takes a holistic, enterprise-wide view, integrating risk considerations into strategic planning and decision-making across all business units."
              },
              {
                q: "How long does an ERM implementation take?",
                a: "A foundational ERM program typically takes 3-6 months to implement, depending on organizational complexity. However, ERM is an ongoing capability, not a one-time project — we design programs for continuous improvement."
              },
              {
                q: "Do we need a Chief Risk Officer to implement ERM?",
                a: "Not necessarily. While a CRO can be valuable for larger organizations, effective ERM can be led by existing leadership with proper training and governance structures. We help design accountability models that fit your organization."
              }
            ].map((faq, i) => (
              <div key={i} className="border-l-2 border-[#c9a227] pl-6">
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-neutral-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to assess your risk posture?
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Let's discuss how our ERM expertise can help your organization build resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#c9a227] text-[#0a0f1a] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services/risk-services"
              className="inline-flex items-center justify-center border border-white/20 text-white px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-white/5 transition-colors"
            >
              Parlinum Risk Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
