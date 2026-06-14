'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/* Premium SVG icons for each industry */
function GovIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/>
      <polygon points="12 2 20 7 4 7"/>
    </svg>
  )
}

function MuniIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function MineIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 22 8.5-8.5M17 2l-5 5M15 4l5 5M7 12l5 5m2-10 3 3"/>
      <circle cx="18" cy="18" r="3"/>
      <path d="m21 21 1.5 1.5"/>
    </svg>
  )
}

function AgriIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12"/>
      <path d="M20 7c0 4-3.6 7-8 7S4 11 4 7c0 0 4-4 8-4s8 4 8 4z"/>
      <path d="M4 22h16"/>
    </svg>
  )
}

function HealthIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}

function EduIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  )
}

function EnergyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  )
}

function RetailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  )
}

const industries = [
  { Icon: GovIcon, label: 'Government & SOEs', desc: 'National and provincial departments, public entities and state-owned enterprises.' },
  { Icon: MuniIcon, label: 'Municipalities', desc: 'Local and district municipalities across all nine provinces.' },
  { Icon: MineIcon, label: 'Mining & Minerals', desc: 'Iron ore, manganese, diamonds, copper and industrial minerals.' },
  { Icon: AgriIcon, label: 'Agriculture', desc: 'Commercial farming, agri-processing, irrigation and export agriculture.' },
  { Icon: HealthIcon, label: 'Healthcare', desc: 'Public and private hospitals, clinics, laboratories and healthcare facilities.' },
  { Icon: EduIcon, label: 'Education', desc: 'Schools, TVET colleges, universities and educational institutions.' },
  { Icon: EnergyIcon, label: 'Energy & Utilities', desc: 'Renewable energy projects, water utilities and municipal infrastructure.' },
  { Icon: RetailIcon, label: 'Retail & FMCG', desc: 'Large retail groups, FMCG distributors and supply chain operators.' },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-white">
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
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Industries We Serve</span>
            <div className="w-12 h-0.5 bg-[#F97316]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#062544] mb-4 text-balance">
            Serving South Africa&apos;s Most Critical Sectors
          </h2>
          <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Our multi-division model means we can serve complex, multi-sector clients with a single, coordinated partner.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col bg-[#F5F7FA] hover:bg-[#062544] rounded-xl p-6 cursor-default transition-all duration-300 border border-transparent hover:border-[#F97316]/30"
            >
              <div className="w-12 h-12 rounded-lg bg-[#062544] group-hover:bg-[#F97316] flex items-center justify-center text-[#F97316] group-hover:text-white mb-4 transition-colors">
                <ind.Icon />
              </div>
              <h3 className="font-heading font-black text-[#062544] group-hover:text-white text-base mb-2 transition-colors">
                {ind.label}
              </h3>
              <p className="text-[#1E293B]/60 group-hover:text-white/60 text-sm leading-relaxed transition-colors flex-1">
                {ind.desc}
              </p>
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
            href="/industries"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#062544] hover:bg-[#0a3a6e] text-white font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
          >
            Explore All Industries
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
