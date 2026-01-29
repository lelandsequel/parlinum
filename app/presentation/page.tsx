'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    type: 'title',
    content: {
      title: 'Parlinum Consulting',
      subtitle: 'Digital Transformation Analysis',
      tagline: 'Before & After: What Changed and Why It Matters'
    }
  },
  {
    id: 2,
    type: 'problem',
    content: {
      title: 'The Problem',
      subtitle: 'What We Found',
      points: [
        'WordPress/Elementor template — slow, generic, forgettable',
        'Broken elements ("50+ years experience" counter showing 0)',
        'Corporate jargon overload — "deliver deep insight" means nothing',
        'SDVOSB certification buried at the bottom',
        'No structured data for search engines or AI',
        'Client logos exist but underutilized',
        'No answer-first content for voice/AI search'
      ]
    }
  },
  {
    id: 3,
    type: 'pillar',
    content: {
      num: '01',
      title: 'Technical SEO',
      before: ['WordPress bloat (3-5s load time)', 'No meta optimization', 'Missing schema markup', 'No sitemap/robots.txt'],
      after: ['Next.js static generation (<1s)', 'Optimized meta per page', 'Full JSON-LD schema', 'Proper sitemap & robots']
    }
  },
  {
    id: 4,
    type: 'pillar',
    content: {
      num: '02',
      title: 'Content Structure',
      before: ['Wall-of-text syndrome', 'Jargon-heavy copy', 'No clear hierarchy', 'Generic value propositions'],
      after: ['Scannable, hierarchical layout', 'Clear, direct messaging', 'Proper heading structure', 'Differentiated positioning']
    }
  },
  {
    id: 5,
    type: 'pillar',
    content: {
      num: '03',
      title: 'Answer Engine Optimization',
      before: ['No answer-first content', 'No FAQ sections', 'No entity definitions', 'AI assistants skip over'],
      after: ['Answer-first blocks on every page', 'Structured FAQ schema', 'Clear entity definitions', 'Optimized for AI citations']
    }
  },
  {
    id: 6,
    type: 'pillar',
    content: {
      num: '04',
      title: 'Trust Signals',
      before: ['SDVOSB badge buried', 'Client logos small/hidden', 'No leadership prominence', 'Weak credibility flow'],
      after: ['SDVOSB featured in hero', 'Client logos prominent', 'Leadership with full bios', 'CAGE/UEI displayed']
    }
  },
  {
    id: 7,
    type: 'pillar',
    content: {
      num: '05',
      title: 'Conversion Architecture',
      before: ['Single weak CTA', 'No service-specific paths', 'Generic contact form', 'No urgency or differentiation'],
      after: ['Multiple strategic CTAs', 'Service-specific landing pages', 'Contextual contact forms', 'Clear value propositions']
    }
  },
  {
    id: 8,
    type: 'comparison',
    content: {
      title: 'Before vs After',
      metrics: [
        { label: 'Page Load Time', before: '3-5 seconds', after: '<1 second' },
        { label: 'Lighthouse Score', before: '~60', after: '95+' },
        { label: 'Schema Types', before: '0', after: '6+' },
        { label: 'AEO Readiness', before: 'None', after: 'Full' },
        { label: 'Mobile Experience', before: 'Passable', after: 'Optimized' }
      ]
    }
  },
  {
    id: 9,
    type: 'closing',
    content: {
      title: 'The Result',
      subtitle: 'A site that works as hard as you do.',
      points: [
        'Faster, more professional first impression',
        'Discoverable by search engines AND AI assistants',
        'Trust signals that close deals',
        'Architecture that converts visitors to clients'
      ]
    }
  }
];

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white flex flex-col" onClick={next}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-[#0a0f1a]/80 backdrop-blur-sm">
        <Link href="/" className="text-sm font-bold tracking-widest text-neutral-500 hover:text-white transition-colors">
          PARLINUM
        </Link>
        <div className="text-sm text-neutral-600">
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center px-8 py-24">
        <div className="max-w-5xl w-full">
          {slide.type === 'title' && (
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">{slide.content.title}</h1>
              <p className="text-2xl md:text-3xl text-[#c9a227] mb-8">{slide.content.subtitle}</p>
              <p className="text-xl text-neutral-500">{slide.content.tagline}</p>
            </div>
          )}

          {slide.type === 'problem' && (
            <div>
              <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">{slide.content.subtitle}</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-12">{slide.content.title}</h2>
              <ul className="space-y-4">
                {slide.content.points?.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-xl text-neutral-400">
                    <span className="text-red-500">✗</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {slide.type === 'pillar' && (
            <div>
              <div className="text-8xl font-bold text-white/10 mb-4">{slide.content.num}</div>
              <h2 className="text-5xl font-bold mb-12">{slide.content.title}</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-red-400 uppercase tracking-widest text-sm mb-4">Before</p>
                  <ul className="space-y-3">
                    {slide.content.before?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-500">
                        <span className="text-red-500">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4">After</p>
                  <ul className="space-y-3">
                    {slide.content.after?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-300">
                        <span className="text-[#c9a227]">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'comparison' && (
            <div>
              <h2 className="text-5xl font-bold mb-12">{slide.content.title}</h2>
              <div className="space-y-6">
                {slide.content.metrics?.map((metric) => (
                  <div key={metric.label} className="grid grid-cols-3 gap-8 items-center border-b border-white/10 pb-6">
                    <div className="text-lg font-medium">{metric.label}</div>
                    <div className="text-center text-red-400">{metric.before}</div>
                    <div className="text-center text-[#c9a227] font-bold">{metric.after}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'closing' && (
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">{slide.content.title}</h2>
              <p className="text-2xl text-[#c9a227] mb-12">{slide.content.subtitle}</p>
              <ul className="space-y-4 text-xl text-neutral-400 max-w-2xl mx-auto">
                {slide.content.points?.map((point, i) => (
                  <li key={i} className="flex items-center justify-center gap-4">
                    <span className="text-[#c9a227]">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-[#c9a227]' : 'bg-white/20'}`}
          />
        ))}
      </div>

      {/* Navigation Hint */}
      <div className="fixed bottom-8 right-8 text-xs text-neutral-600">
        Click or use arrow keys to navigate
      </div>
    </div>
  );
}
