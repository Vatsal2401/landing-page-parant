'use client';

import { useState } from 'react';

interface ServiceCard {
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  highlight?: string;
}

const SOFTWARE: ServiceCard[] = [
  {
    emoji: '🌐',
    title: 'Landing Pages',
    description:
      'High-converting, mobile-first websites that drive real enquiries — built and live in under a week.',
    tags: ['Next.js', 'Tailwind', 'WhatsApp CTA'],
  },
  {
    emoji: '⚡',
    title: 'SaaS Products',
    description:
      'Full-stack web applications from auth to billing — we own the entire product build so you can focus on growth.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
  },
  {
    emoji: '📱',
    title: 'Mobile Apps',
    description:
      'React Native apps that work offline and feel native — for Android and iOS with a single codebase.',
    tags: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    emoji: '🖥️',
    title: 'Desktop Apps',
    description:
      'Cross-platform desktop software for Windows, Mac, and Linux — perfect for businesses with internal tooling needs.',
    tags: ['Electron', 'React', 'SQLite'],
  },
  {
    emoji: '🤖',
    title: 'AI Integration',
    description:
      'Add ChatGPT, voice generation, or custom AI pipelines to your product — we integrate AI where it actually adds value.',
    tags: ['OpenAI', 'ElevenLabs', 'Langchain'],
  },
  {
    emoji: '🛒',
    title: 'E-commerce',
    description:
      'Custom online stores with payment integration, inventory management, and a checkout experience your customers will love.',
    tags: ['Next.js', 'Razorpay', 'Stripe'],
  },
];

const MARKETING: ServiceCard[] = [
  {
    emoji: '📧',
    title: 'Email Marketing',
    description:
      'From welcome sequences to re-engagement campaigns — we write, design, and set up automated email flows that nurture leads and drive repeat sales.',
    tags: ['Mailchimp', 'Brevo', 'Automation'],
    highlight: 'Avg. 38× ROI on email marketing spend',
  },
  {
    emoji: '🎯',
    title: 'Meta Ads',
    description:
      'Facebook and Instagram ad campaigns that actually convert. We handle creatives, audience targeting, A/B testing, and ROAS optimisation.',
    tags: ['Facebook Ads', 'Instagram Ads', 'ROAS'],
    highlight: 'Campaigns optimised for cost-per-lead',
  },
];

const CONTENT: ServiceCard[] = [
  {
    emoji: '✂️',
    title: 'Video Editing',
    description:
      'Professional short-form and long-form video editing for YouTube, Instagram, and TikTok — captions, transitions, colour grading, and B-roll included.',
    tags: ['Reels', 'YouTube', 'DaVinci Resolve'],
    highlight: 'Turnaround in 24–48 hours',
  },
  {
    emoji: '🎭',
    title: 'UGC Video Generation',
    description:
      'AI-generated user-generated content that looks authentic — ideal for paid ads, product demos, and social proof without the cost of hiring creators.',
    tags: ['AI Avatars', 'Ad Creatives', 'ElevenLabs'],
    highlight: 'Powered by AutoReels AI',
  },
  {
    emoji: '🎬',
    title: 'Faceless Reels & Shorts',
    description:
      'Fully automated faceless video production — script, voiceover, visuals, captions, and music sync. Scale content without showing your face.',
    tags: ['AutoReels', 'AI Voiceover', 'Shorts'],
    highlight: '10× faster than manual editing',
  },
  {
    emoji: '🖼️',
    title: 'Thumbnail Design',
    description:
      'Click-worthy custom thumbnails for YouTube and social media — designed to maximise CTR with bold typography and high-contrast visuals.',
    tags: ['YouTube', 'A/B Tested', 'Figma'],
  },
  {
    emoji: '🎙️',
    title: 'AI Voiceover',
    description:
      'Natural-sounding AI voiceovers in multiple languages and accents — perfect for explainer videos, ads, and course content at a fraction of studio cost.',
    tags: ['ElevenLabs', 'Multi-language', 'TTS'],
  },
  {
    emoji: '📋',
    title: 'Content Strategy',
    description:
      'A 30-day content calendar built around your niche, audience, and goals — with scripting, posting schedule, and hashtag research included.',
    tags: ['Scripting', 'Calendar', 'Analytics'],
  },
];

const TABS = [
  { id: 'software', label: '💻  Software', subtitle: 'We build it' },
  { id: 'marketing', label: '📣  Marketing', subtitle: 'We grow it' },
  { id: 'content', label: '🎬  Content', subtitle: 'We create it' },
] as const;

type TabId = typeof TABS[number]['id'];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<TabId>('software');

  const services = activeTab === 'software' ? SOFTWARE : activeTab === 'marketing' ? MARKETING : CONTENT;

  return (
    <section id="services" style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'var(--color-purple)',
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              margin: '0 0 16px',
              lineHeight: 1.15,
            }}
          >
            Everything you need to compete online
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: 0, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
            From a landing page to a full SaaS — we build the product <em>and</em> grow it.
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-flex',
              background: 'var(--bg-base)',
              border: '1px solid var(--bg-border)',
              borderRadius: '14px',
              padding: '5px',
              gap: '4px',
            }}
          >
            {TABS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 28px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-display), sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                    background: active ? 'var(--color-purple)' : 'transparent',
                    color: active ? '#fff' : 'var(--text-secondary)',
                    boxShadow: active ? '0 2px 12px rgba(124,58,237,0.35)' : 'none',
                  }}
                >
                  {tab.label}
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontWeight: 500,
                      opacity: 0.75,
                      marginTop: '1px',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {tab.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: activeTab === 'marketing'
              ? 'repeat(auto-fill, minmax(360px, 1fr))'
              : 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="animate-fade-up"
              style={{
                background: '#ffffff',
                border: '1px solid var(--bg-border)',
                borderRadius: 'var(--card-r)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                animationDelay: `${i * 60}ms`,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(14,39,59,0.06)',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              }}
            >
              {/* Marketing/Content tab: accent top bar */}
              {(activeTab === 'marketing' || activeTab === 'content') && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--color-purple), #a855f7)',
                  }}
                />
              )}

              <span style={{ fontSize: '2rem' }}>{svc.emoji}</span>
              <h3
                style={{
                  fontFamily: 'var(--font-display), sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: 0,
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  margin: 0,
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                {svc.description}
              </p>

              {'highlight' in svc && svc.highlight && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'rgba(124,58,237,0.07)',
                    border: '1px solid rgba(124,58,237,0.15)',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--color-purple)',
                  }}
                >
                  <span>✦</span> {svc.highlight}
                </div>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '2px 10px',
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: 500,
                      background: 'rgba(124,58,237,0.08)',
                      color: 'var(--color-purple)',
                      border: '1px solid rgba(124,58,237,0.18)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
