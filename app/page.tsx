import Link from 'next/link';

const clients = [
  "Bank of America", "BNY Mellon", "USAA", "Cigna Healthcare", 
  "Freddie Mac", "FDIC", "Lincoln Financial", "Texas Capital Bank",
  "Under Armour", "WellCare", "Independence Blue Cross", "Export-Import Bank"
];

const services = [
  {
    name: "Enterprise Risk Management",
    slug: "enterprise-risk-management",
    description: "Structured frameworks for identifying, assessing, and mitigating risks across healthcare, financial services, and higher education."
  },
  {
    name: "Technology & Cybersecurity",
    slug: "technology-cybersecurity",
    description: "Cybersecurity assessments, managed security services, and IT risk governance using NIST, ISO 27001, and MITRE ATT&CK frameworks."
  },
  {
    name: "Program & Project Management",
    slug: "program-management",
    description: "Execution of complex initiatives through structured governance, from IT transformations to construction project controls."
  },
  {
    name: "Workforce Training & Staffing",
    slug: "workforce-training",
    description: "End-to-end workforce solutions including technical training, talent acquisition, and business process outsourcing."
  }
];

const naicsCodes = [
  { code: "541611", label: "Admin. Mgmt. & Gen Mgmt. Consulting" },
  { code: "541618", label: "Other Mgmt. Consulting Services" },
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "541690", label: "Other Scientific & Technical Consulting" },
  { code: "541990", label: "All Other Professional, Scientific & Tech" },
  { code: "561320", label: "Contract Staffing" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-8 pt-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/90 to-[#0a0f1a]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-[#0a0f1a]/50" />
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-2 mb-8">
              <span className="text-[#c9a227] text-xs uppercase tracking-widest">SDVOSB Certified</span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6">
              Risk is inevitable.<br />
              <span className="text-[#c9a227]">Being unprepared isn't.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
              Enterprise risk management, cybersecurity, and strategic consulting 
              for organizations that can't afford to get it wrong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#c9a227] text-[#0a0f1a] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/presentation"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-white/5 transition-colors"
              >
                View Our Approach
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 md:left-8 text-xs uppercase tracking-widest text-neutral-600 hidden md:block">
          Scroll
        </div>
      </section>

      {/* Answer-First Block (AEO) */}
      <section className="py-16 px-6 md:px-8 bg-[#0d1321] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-sm uppercase tracking-widest text-[#c9a227] mb-4">What We Do</h2>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              Parlinum Consulting helps organizations identify, quantify, and mitigate enterprise risks 
              before they become crises. We serve Fortune 500 companies, federal agencies, and mid-market 
              firms across healthcare, financial services, and higher education.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Services</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Targeted solutions.<br />
                <span className="text-neutral-500">Proven results.</span>
              </h2>
            </div>
            <Link href="/services/risk-services" className="text-[#c9a227] text-sm uppercase tracking-widest hover:underline">
              Parlinum Risk Services →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`} 
                className="group border border-white/10 p-8 hover:border-[#c9a227]/50 hover:bg-[#0d1321] transition-all"
              >
                <div className="text-5xl font-bold text-white/10 group-hover:text-[#c9a227]/30 transition-colors mb-6">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#c9a227] transition-colors">
                  {service.name}
                </h3>
                <p className="text-neutral-400 mb-6">{service.description}</p>
                <span className="text-[#c9a227] text-sm uppercase tracking-widest group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Why Parlinum</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Experience that matters.
              </h2>
              <div className="space-y-6 text-neutral-400 text-lg">
                <p>
                  Our leadership team includes former KPMG Managing Directors who've advised 
                  Fortune 500 boards on governance, risk oversight, and enterprise risk management.
                </p>
                <p>
                  Since 2018, we've delivered strategic advisory services to organizations 
                  navigating regulatory complexity, cyber threats, and operational disruptions.
                </p>
                <p>
                  As a certified Service-Disabled Veteran-Owned Small Business (SDVOSB), 
                  we bring the discipline, accountability, and mission focus that 
                  government and enterprise clients demand.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#c9a227] text-sm uppercase tracking-widest mt-8 hover:underline"
              >
                About Our Team →
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0a0f1a] border border-white/10 p-6">
                <div className="text-4xl font-bold text-[#c9a227] mb-2">50+</div>
                <div className="text-neutral-500 text-sm">Years Combined Experience</div>
              </div>
              <div className="bg-[#0a0f1a] border border-white/10 p-6">
                <div className="text-4xl font-bold text-[#c9a227] mb-2">SDVOSB</div>
                <div className="text-neutral-500 text-sm">Certified Veteran-Owned</div>
              </div>
              <div className="bg-[#0a0f1a] border border-white/10 p-6">
                <div className="text-4xl font-bold text-[#c9a227] mb-2">F500</div>
                <div className="text-neutral-500 text-sm">Client Experience</div>
              </div>
              <div className="bg-[#0a0f1a] border border-white/10 p-6">
                <div className="text-4xl font-bold text-[#c9a227] mb-2">DC</div>
                <div className="text-neutral-500 text-sm">Washington Based</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 px-6 md:px-8 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-neutral-600 mb-12">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clients.map((client) => (
              <div key={client} className="flex items-center justify-center h-16 text-neutral-500 text-sm text-center">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Contracting</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">NAICS Codes</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {naicsCodes.map((item) => (
              <div key={item.code} className="border border-white/10 p-4">
                <div className="text-xl font-bold text-[#c9a227] mb-2">{item.code}</div>
                <div className="text-neutral-500 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-500">
            <span><strong className="text-white">CAGE:</strong> 84KA6</span>
            <span><strong className="text-white">UEI:</strong> E7Y1ENGTNA55</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-[#0d1321]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to strengthen<br />
            <span className="text-[#c9a227]">your risk posture?</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Let's discuss how Parlinum can help your organization navigate 
            today's complex risk landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#c9a227] text-[#0a0f1a] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+12026646345"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-white/5 transition-colors"
            >
              +1 202 664 6345
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
