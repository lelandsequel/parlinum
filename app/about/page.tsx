import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Parlinum Consulting',
  description: 'SDVOSB-certified management consulting firm founded in 2018. Led by former KPMG Managing Directors with Fortune 500 experience.',
};

const leadership = [
  {
    name: "Edmund Green",
    title: "Founder & CEO",
    bio: "Edmund advises middle-market corporations on risk management, strategic growth, and international market entry. He co-founded Board Harbor, curating exclusive events for corporate directors. Previously, he was Managing Director at KPMG US, specializing in corporate governance, risk oversight, and enterprise risk management for Fortune 500 firms."
  },
  {
    name: "Leah Nduati",
    title: "Chief Operating Officer",
    bio: "Leah drives strategic initiatives connecting Africa's skilled professionals with global opportunities while optimizing operational efficiency. With extensive experience in startup acceleration, market expansion, and investment readiness, she has led programs supporting African entrepreneurs in scaling and securing funding."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/" className="text-neutral-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">← Back Home</Link>
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">About Parlinum</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6">
            Experience that<br />
            <span className="text-neutral-500">drives results.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-neutral-400 text-lg">
                <p>
                  Parlinum Consulting was founded in 2018 to deliver targeted management consulting 
                  services across commercial, government, and not-for-profit sectors.
                </p>
                <p>
                  We specialize in enterprise risk management, program and project management, 
                  IT resource optimization, cybersecurity risk mitigation, and supply chain 
                  assessment and optimization.
                </p>
                <p>
                  Our network of experienced professionals has delivered deep insight to help 
                  clients solve complex problems and improve performance. Our client-centered 
                  approach, customized solutions, and consistent high-quality delivery have 
                  enabled us to create enduring, trusted relationships.
                </p>
              </div>
            </div>
            
            <div className="bg-[#0d1321] border border-white/10 p-8 h-fit">
              <div className="inline-flex items-center gap-3 border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-2 mb-8">
                <span className="text-[#c9a227] text-xs uppercase tracking-widest">SDVOSB Certified</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Service-Disabled Veteran-Owned Small Business</h3>
              <p className="text-neutral-400 mb-6">
                Parlinum Consulting, LLC is a certified SDVOSB, bringing the discipline, 
                accountability, and mission focus that government and enterprise clients demand.
              </p>
              <div className="space-y-2 text-sm text-neutral-500">
                <p><strong className="text-white">CAGE:</strong> 84KA6</p>
                <p><strong className="text-white">UEI:</strong> E7Y1ENGTNA55</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((person) => (
              <div key={person.name} className="border border-white/10 p-8">
                <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                <p className="text-[#c9a227] text-sm uppercase tracking-widest mb-6">{person.title}</p>
                <p className="text-neutral-400 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Client-Centered", desc: "We listen first. Every engagement is tailored to your specific challenges, objectives, and organizational context." },
              { title: "Results-Driven", desc: "We measure success by outcomes, not activities. Our work creates lasting value and measurable improvement." },
              { title: "Trusted Partnership", desc: "We build enduring relationships through transparency, integrity, and consistent high-quality delivery." }
            ].map((value) => (
              <div key={value.title} className="border-l-2 border-[#c9a227] pl-6">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Let's discuss how Parlinum can help your organization navigate complex challenges.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#c9a227] text-[#0a0f1a] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
