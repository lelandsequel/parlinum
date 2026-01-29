import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, industries } from '../../../../lib/pseo-data';

type Props = {
  params: Promise<{ industry: string; service: string }>;
};

export async function generateStaticParams() {
  const params: Array<{ industry: string; service: string }> = [];
  for (const industry of industries) {
    for (const service of services) {
      params.push({ industry: industry.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: industrySlug, service: serviceSlug } = await params;
  const industry = industries.find((i) => i.slug === industrySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!industry || !service) return { title: 'Not Found' };

  return {
    title: `${service.name} for ${industry.name} | Parlinum Consulting`,
    description: `${service.description} Specialized solutions for ${industry.name.toLowerCase()} organizations. SDVOSB-certified consultants with Fortune 500 experience.`,
  };
}

export default async function IndustryServicePage({ params }: Props) {
  const { industry: industrySlug, service: serviceSlug } = await params;
  const industry = industries.find((i) => i.slug === industrySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!industry || !service) {
    notFound();
  }

  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/home" className="text-neutral-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">
            ← Back Home
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest border border-[#c9a227]/30 bg-[#c9a227]/10 text-[#c9a227] px-3 py-1">
              {industry.name}
            </span>
            <span className="text-xs uppercase tracking-widest border border-white/20 text-white/60 px-3 py-1">
              {service.shortName}
            </span>
          </div>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight mb-6">
            {service.name}<br />
            <span className="text-neutral-500">for {industry.name}</span>
          </h1>
          
          {/* Answer-First Block */}
          <div className="bg-[#0d1321] border border-white/10 p-8 max-w-3xl mt-12">
            <p className="text-lg text-neutral-300 leading-relaxed">
              {service.description} We bring specialized expertise to {industry.name.toLowerCase()} organizations, 
              helping you navigate industry-specific risks, regulatory requirements, and operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {industry.name} Challenges We Address
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl">
            {industry.description} These organizations face unique risk and operational challenges.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.challenges.map((challenge, i) => (
              <div key={i} className="border border-white/10 p-6 hover:border-[#c9a227]/50 transition-colors">
                <div className="text-[#c9a227] text-sm font-mono mb-4">0{i + 1}</div>
                <p className="text-neutral-300">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Parlinum for {industry.name}
              </h2>
              <div className="space-y-6 text-neutral-400 text-lg">
                <p>
                  Our team brings deep {industry.name.toLowerCase()} sector experience, having advised 
                  leading organizations on {service.name.toLowerCase()} strategy and implementation.
                </p>
                <p>
                  We understand the regulatory landscape, competitive dynamics, and operational 
                  realities that shape risk in your industry. Our solutions are tailored to your 
                  specific context — not generic frameworks applied without adaptation.
                </p>
                <p>
                  As an SDVOSB-certified firm, we combine Fortune 500 advisory experience with 
                  the agility and client focus of a specialized consultancy.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-[#c9a227] pl-6">
                <div className="text-2xl font-bold mb-2">Industry Expertise</div>
                <div className="text-neutral-500">Deep {industry.name.toLowerCase()} sector knowledge</div>
              </div>
              <div className="border-l-2 border-[#c9a227] pl-6">
                <div className="text-2xl font-bold mb-2">Proven Frameworks</div>
                <div className="text-neutral-500">ISO, NIST, COSO methodologies</div>
              </div>
              <div className="border-l-2 border-[#c9a227] pl-6">
                <div className="text-2xl font-bold mb-2">SDVOSB Certified</div>
                <div className="text-neutral-500">Veteran-owned small business</div>
              </div>
              <div className="border-l-2 border-[#c9a227] pl-6">
                <div className="text-2xl font-bold mb-2">DC-Based</div>
                <div className="text-neutral-500">Close to federal and regulatory bodies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold mb-12">Related Services for {industry.name}</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link 
                key={s.slug}
                href={`/industries/${industry.slug}/${s.slug}`}
                className={`border p-6 transition-colors ${s.slug === service.slug ? 'border-[#c9a227] bg-[#c9a227]/10' : 'border-white/10 hover:border-[#c9a227]/50'}`}
              >
                <h3 className="font-bold mb-2">{s.shortName}</h3>
                <p className="text-neutral-500 text-sm">{s.description.slice(0, 60)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to strengthen your {industry.name.toLowerCase()} organization?
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Let's discuss how our {service.name.toLowerCase()} expertise can help you navigate 
            {industry.name.toLowerCase()} sector challenges.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-[#c9a227] text-[#0a0f1a] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
