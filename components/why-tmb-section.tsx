'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/* Premium SVG icons for differentiators */
function IntegratedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  )
}

function BeeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
      <path d="M9 12h6M12 9v6"/>
      <path d="m15 9-3-3-3 3M9 15l3 3 3-3"/>
    </svg>
  )
}

function SaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}

function ScaleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
      <polyline points="7.5 19.79 7.5 14.6 3 12"/>
      <polyline points="21 12 16.5 14.6 16.5 19.79"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  )
}

function ProvenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}

function EmpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

const differentiators = [
  {
    Icon: IntegratedIcon,
    title: 'Integrated Group Synergy',
    description:
      'With six divisions under one roof, TMB Entities delivers seamless cross-division coordination — reducing cost, complexity and delivery time for clients needing multi-service solutions.',
  },
  {
    Icon: BeeIcon,
    title: '100% Black-Owned B-BBEE Level 1',
    description:
      'TMB Entities is 100% Black-owned, holds a B-BBEE Level 1 contributor status (EME), and actively invests in SMME development, enterprise support and employment equity.',
  },
  {
    Icon: SaIcon,
    title: 'SA-Based. Nationally Reaching.',
    description:
      'Rooted in the Northern Cape, our operations span all nine provinces and extend across the SADC region — giving clients both local knowledge and national reach.',
  },
  {
    Icon: ScaleIcon,
    title: 'Flexible Scale',
    description:
      'From SMME-level requirements to SOE-scale contracts, our operational model scales efficiently to meet client requirements without compromising quality or timelines.',
  },
  {
    Icon: ProvenIcon,
    title: 'Proven Delivery Track Record',
    description:
      'Our client base includes government departments, municipalities, mining houses, SOEs and private-sector companies — validating our capability through consistent delivery.',
  },
  {
    Icon: EmpIcon,
    title: 'Community Impact & BEE',
    description:
      'TMB Entities is committed to creating meaningful economic empowerment — from job creation and skills development to local enterprise support and community investment.',
  },
]

export default function WhyTmbSection() {
  return (
    <section id="why-tmb" className="py-16 sm:py-20 lg:py-24 bg-[#062544]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#F97316]" />
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Why TMB Entities</span>
            <div className="w-12 h-0.5 bg-[#F97316]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 text-balance">
            What Sets Us Apart
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We are not just a service provider. We are a strategic partner committed to driving real impact across South Africa&apos;s industrial landscape.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#F97316]/40 rounded-xl p-8 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#F97316]/20 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] mb-5">
                <d.Icon />
              </div>
              <h3 className="font-heading font-black text-white text-lg mb-3">{d.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{d.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F97316] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-b-xl" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/why-tmb"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#ea6700] text-white font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
          >
            Why Choose TMB Entities
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
