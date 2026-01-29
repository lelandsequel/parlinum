import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { organizationSchema, localBusinessSchema } from "../lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parlinum Consulting | Enterprise Risk & Management Consulting",
  description: "SDVOSB-certified management consulting firm specializing in enterprise risk management, cybersecurity, and program management for Fortune 500, federal, and mid-market clients.",
  keywords: "enterprise risk management, ERM consulting, cybersecurity consulting, SDVOSB, management consulting DC, federal contractor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0f1a] text-white`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 md:py-5">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <Link href="/home" className="hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="Parlinum Consulting" className="h-10 md:h-16 w-auto" />
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/about" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/industries" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
                Industries
              </Link>
              <div className="relative group">
                <span className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white cursor-pointer transition-colors">
                  Services
                </span>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-[#0d1321] border border-white/10 p-4 min-w-[260px] space-y-3">
                    <Link href="/services/enterprise-risk-management" className="block text-sm text-neutral-400 hover:text-white transition-colors">
                      Enterprise Risk Management
                    </Link>
                    <Link href="/services/technology-cybersecurity" className="block text-sm text-neutral-400 hover:text-white transition-colors">
                      Technology & Cybersecurity
                    </Link>
                    <Link href="/services/program-management" className="block text-sm text-neutral-400 hover:text-white transition-colors">
                      Program & Project Management
                    </Link>
                    <Link href="/services/workforce-training" className="block text-sm text-neutral-400 hover:text-white transition-colors">
                      Workforce Training & Staffing
                    </Link>
                    <Link href="/services/risk-services" className="block text-sm text-neutral-400 hover:text-white transition-colors">
                      Parlinum Risk Services
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/presentation" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
                Deck
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/contact"
                className="text-[10px] uppercase tracking-widest border border-[#c9a227] text-[#c9a227] px-3 py-2 hover:bg-[#c9a227] hover:text-[#0a0f1a] transition-all"
              >
                Contact
              </Link>
              <details className="relative">
                <summary className="list-none cursor-pointer p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="absolute right-0 top-full mt-2 bg-[#0d1321] border border-white/10 p-4 min-w-[200px] space-y-3 z-50">
                  <Link href="/about" className="block text-sm text-neutral-400 hover:text-white transition-colors">About</Link>
                  <Link href="/industries" className="block text-sm text-neutral-400 hover:text-white transition-colors">Industries</Link>
                  <Link href="/services/enterprise-risk-management" className="block text-sm text-neutral-400 hover:text-white transition-colors">ERM</Link>
                  <Link href="/services/technology-cybersecurity" className="block text-sm text-neutral-400 hover:text-white transition-colors">Cybersecurity</Link>
                  <Link href="/services/program-management" className="block text-sm text-neutral-400 hover:text-white transition-colors">Program Mgmt</Link>
                  <Link href="/services/workforce-training" className="block text-sm text-neutral-400 hover:text-white transition-colors">Workforce</Link>
                  <Link href="/presentation" className="block text-sm text-neutral-400 hover:text-white transition-colors">Deck</Link>
                  <Link href="/contact" className="block text-sm text-[#c9a227] hover:text-white transition-colors">Contact</Link>
                </div>
              </details>
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex text-xs uppercase tracking-widest border border-[#c9a227] text-[#c9a227] px-5 py-2.5 hover:bg-[#c9a227] hover:text-[#0a0f1a] transition-all"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="border-t border-white/5 bg-[#0a0f1a]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="col-span-2">
                <img src="/logo.png" alt="Parlinum Consulting" className="h-10 md:h-12 w-auto mb-4" />
                <p className="text-neutral-500 text-xs md:text-sm max-w-md mb-4 md:mb-6">
                  Certified Service-Disabled Veteran-Owned Small Business (SDVOSB) delivering 
                  enterprise risk management and strategic consulting to Fortune 500, federal, 
                  and mid-market clients since 2018.
                </p>
                <div className="flex gap-4 text-[10px] md:text-xs text-neutral-600">
                  <span>CAGE: 84KA6</span>
                  <span>UEI: E7Y1ENGTNA55</span>
                </div>
              </div>
              
              <div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-600 mb-3 md:mb-4">Services</div>
                <div className="space-y-2">
                  <Link href="/services/enterprise-risk-management" className="block text-xs md:text-sm text-neutral-400 hover:text-white transition-colors">
                    Enterprise Risk Management
                  </Link>
                  <Link href="/services/technology-cybersecurity" className="block text-xs md:text-sm text-neutral-400 hover:text-white transition-colors">
                    Technology & Cybersecurity
                  </Link>
                  <Link href="/services/program-management" className="block text-xs md:text-sm text-neutral-400 hover:text-white transition-colors">
                    Program & Project Management
                  </Link>
                  <Link href="/services/workforce-training" className="block text-xs md:text-sm text-neutral-400 hover:text-white transition-colors">
                    Workforce Training
                  </Link>
                </div>
              </div>
              
              <div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-600 mb-3 md:mb-4">Contact</div>
                <div className="space-y-2 text-xs md:text-sm text-neutral-400">
                  <p>5716 16th Street NW, Ste. B</p>
                  <p>Washington, DC 20011</p>
                  <p className="mt-4">+1 202 664 6345</p>
                  <p>info@parlinum.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
              <div className="text-neutral-600 text-[10px] md:text-xs text-center md:text-left">
                © {new Date().getFullYear()} Parlinum Consulting, LLC. All rights reserved.
              </div>
              <div className="text-neutral-700 text-[10px] md:text-xs">
                SDVOSB Certified • Washington, DC
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
