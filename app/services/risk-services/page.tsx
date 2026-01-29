import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parlinum Risk Services | White-Label ERM for Insurance Providers',
  description: 'White-labeled Enterprise Risk Management advisory services for insurance brokers. Help clients enhance resilience and unlock new insurable opportunities.',
};

const stats = [
  { value: "<10%", label: "of U.S. brokers offer formal ERM consulting services" },
  { value: "Top 3", label: "Boards rank strategic risk in top three concerns" },
  { value: "2.5x", label: "Mature ERM organizations outperform peers" }
];

const offerings = [
  "ERM Program Design and Implementation",
  "Risk Appetite & Tolerance Statements",
  "Risk Culture Diagnostics",
  "Risk Maturity Assessments",
  "Executive and Board Risk Education",
  "KRI (Key Risk Indicator) Dashboards",
  "Strategic Risk Workshops"
];

export default function RiskServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/home" className="text-neutral-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">← Back Home</Link>
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Parlinum Risk Services</p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight mb-6">
            Strategic Risk Advisory<br />
            <span className="text-neutral-500">for Insurance Providers</span>
          </h1>
          
          <div className="bg-[#0d1321] border border-white/10 p-8 max-w-3xl mt-12">
            <p className="text-lg text-neutral-300 leading-relaxed">
              Parlinum Risk Services enables insurance providers to deliver strategic ERM advisory 
              services — fully white-labeled and seamlessly integrated under your brand. Transition 
              from transactional to consultative relationships and position your firm as a trusted 
              partner in navigating today's complex risk landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">The Market Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-white/10 p-8">
                <div className="text-4xl font-bold text-[#c9a227] mb-4">{stat.value}</div>
                <p className="text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border-l-2 border-[#c9a227] pl-6 max-w-2xl">
            <p className="text-lg italic text-neutral-400">
              "Organizations with mature ERM capabilities are 2.5x more likely to achieve superior performance."
            </p>
            <p className="text-sm text-neutral-600 mt-2">— NC State ERM Initiative</p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Partner With Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Expand Your Value Proposition", desc: "Stand out in a competitive landscape by offering strategic risk advisory that complements your core insurance services." },
              { title: "White-Labeled Delivery", desc: "Our services are delivered under your brand. We handle delivery while you maintain the relationship." },
              { title: "Unlock Growth Opportunities", desc: "ERM engagements uncover new insurable risks and drive stronger client retention through value-led conversations." },
              { title: "No In-House Team Required", desc: "From diagnostic assessments to board training, we provide comprehensive ERM capability without you building an internal team." }
            ].map((item) => (
              <div key={item.title} className="border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-3 text-[#c9a227]">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Purpose-Built for the Upper Mid-Market</h2>
          <p className="text-lg text-neutral-400 mb-12 max-w-3xl">
            We support insurance providers serving organizations with $100M–$1B in annual revenue — 
            organizations facing growing risk complexity but lacking formalized risk functions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Cybersecurity & Data Privacy", "Regulatory Compliance", "Operational Continuity", "Third-Party & Supply Chain Risk"].map((risk) => (
              <div key={risk} className="border border-white/10 p-4 text-center">
                <span className="text-sm text-neutral-300">{risk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Advisory Offerings</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {offerings.map((offering) => (
              <div key={offering} className="border border-white/10 p-4 text-sm text-neutral-300 hover:border-[#c9a227]/50 transition-colors">
                {offering}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How We Deliver</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Align & Activate", desc: "Launch with a targeted opportunity webinar and onboard select top-performing brokers with pilot clients ready for strategic risk engagement." },
              { num: "02", title: "Deliver & Validate", desc: "Parlinum delivers white-labeled ERM services under your brand. We document measurable impact through co-branded case studies." },
              { num: "03", title: "Scale & Support", desc: "Using early success as foundation, we expand across your network with tools, training, and ongoing support." }
            ].map((step) => (
              <div key={step.num} className="border border-white/10 p-8">
                <div className="text-5xl font-bold text-white/10 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-neutral-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's build a stronger, risk-resilient future — together.
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Partner with Parlinum Risk Services to fill the ERM gap and position your firm 
            as a forward-looking leader in risk consulting.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#c9a227] text-[#0a0f1a] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
