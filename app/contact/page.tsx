import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Parlinum Consulting',
  description: 'Get in touch with Parlinum Consulting. Schedule a consultation for enterprise risk management, cybersecurity, or strategic advisory services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/" className="text-neutral-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">← Back Home</Link>
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">Contact Us</p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6">
            Let's talk.
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Ready to strengthen your risk posture? Have questions about our services? 
            We'd like to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="border-l-2 border-[#c9a227] pl-6">
                  <div className="text-neutral-500 text-sm uppercase tracking-widest mb-2">Address</div>
                  <p className="text-xl">
                    5716 16th Street NW, Ste. B<br />
                    Washington, DC 20011
                  </p>
                </div>
                
                <div className="border-l-2 border-[#c9a227] pl-6">
                  <div className="text-neutral-500 text-sm uppercase tracking-widest mb-2">Phone</div>
                  <a href="tel:+12026646345" className="text-xl hover:text-[#c9a227] transition-colors">
                    +1 202 664 6345
                  </a>
                </div>
                
                <div className="border-l-2 border-[#c9a227] pl-6">
                  <div className="text-neutral-500 text-sm uppercase tracking-widest mb-2">Email</div>
                  <a href="mailto:info@parlinum.com" className="text-xl hover:text-[#c9a227] transition-colors">
                    info@parlinum.com
                  </a>
                </div>
                
                <div className="border-l-2 border-[#c9a227] pl-6">
                  <div className="text-neutral-500 text-sm uppercase tracking-widest mb-2">Office Hours</div>
                  <p className="text-xl">
                    Mon – Fri: 9:00 AM – 5:00 PM EST
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-12">Send a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-neutral-500 uppercase tracking-widest mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-neutral-500 uppercase tracking-widest mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-neutral-500 uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm text-neutral-500 uppercase tracking-widest mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm text-neutral-500 uppercase tracking-widest mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full bg-[#0a0f1a] border border-white/20 px-4 py-3 text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="erm">Enterprise Risk Management</option>
                    <option value="cyber">Technology & Cybersecurity</option>
                    <option value="program">Program & Project Management</option>
                    <option value="workforce">Workforce Training & Staffing</option>
                    <option value="risk-services">Parlinum Risk Services</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-neutral-500 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#c9a227] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or challenge..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#c9a227] text-[#0a0f1a] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[#d4af37] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
