import Link from 'next/link';
import type { Metadata } from 'next';
import { services, industries } from '../../lib/pseo-data';

export const metadata: Metadata = {
  title: 'Industries We Serve | Parlinum Consulting',
  description: 'Specialized consulting for healthcare, financial services, higher education, and government. Industry-specific risk management and advisory services.',
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/home" className="text-neutral-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">
            ← Back Home
          </Link>
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Industries</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6">
            Specialized expertise<br />
            <span className="text-neutral-500">for complex industries.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            We bring deep sector knowledge to every engagement. Our consultants understand 
            the regulatory landscape, competitive dynamics, and operational realities of your industry.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-16">
            {industries.map((industry, i) => (
              <div key={industry.slug} className="border border-white/10 p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-5xl font-bold text-white/10 mb-4">0{i + 1}</div>
                    <h2 className="text-3xl font-bold mb-4">{industry.name}</h2>
                    <p className="text-neutral-400">{industry.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-xs uppercase tracking-widest text-neutral-600 mb-4">Our Services</div>
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/industries/${industry.slug}/${service.slug}`}
                          className="border border-white/10 p-4 hover:border-[#c9a227]/50 hover:bg-[#0d1321] transition-colors group"
                        >
                          <h3 className="font-bold mb-1 group-hover:text-[#c9a227] transition-colors">
                            {service.shortName}
                          </h3>
                          <p className="text-neutral-500 text-sm">{service.description.slice(0, 50)}...</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Don't see your industry?</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Our frameworks and methodologies apply across sectors. Let's discuss your specific needs.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#c9a227] text-[#0a0f1a] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
