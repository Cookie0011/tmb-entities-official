'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

/* Premium SVG division icons */
function SupplyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
      <path d="m7.5 4.27 9 5.15M3.29 7 12 12l8.71-5M12 22V12M19 16v6M16 19h6"/>
    </svg>
  )
}

function EnergyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  )
}

function ChemicalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M10 9v3.172a2 2 0 0 1-.586 1.414L6 17h12l-3.414-3.414A2 2 0 0 1 14 12.172V9"/>
      <path d="M8.5 17.5A2.5 2.5 0 0 0 11 20h2a2.5 2.5 0 0 0 2.5-2.5"/>
    </svg>
  )
}

function FarmingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12M20 7c0 4-3.6 7-8 7S4 11 4 7c0 0 4-4 8-4s8 4 8 4zM4 22h16"/>
    </svg>
  )
}

function MiningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 22 8.5-8.5M17 2l-5 5M15 4l5 5M7 12l5 5m2-10 3 3"/>
      <circle cx="18" cy="18" r="3"/>
      <path d="m21 21 1.5 1.5"/>
    </svg>
  )
}

function LogisticsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
      <rect x="9" y="11" width="14" height="10" rx="2"/>
      <circle cx="12" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
    </svg>
  )
}

const divisionNodes = [
  { label: 'Supply & Delivery', angle: 0, Icon: SupplyIcon },
  { label: 'Engineering', angle: 60, Icon: EnergyIcon },
  { label: 'Chemical Services', angle: 120, Icon: ChemicalIcon },
  { label: 'Farming', angle: 180, Icon: FarmingIcon },
  { label: 'Mining', angle: 240, Icon: MiningIcon },
  { label: 'Logistics', angle: 300, Icon: LogisticsIcon },
]

const mobileDivisions = [
  { label: 'Supply & Delivery', Icon: SupplyIcon },
  { label: 'Engineering & Energy', Icon: EnergyIcon },
  { label: 'Chemical & Cleaning', Icon: ChemicalIcon },
  { label: 'Farming', Icon: FarmingIcon },
  { label: 'Mining', Icon: MiningIcon },
  { label: 'Logistics', Icon: LogisticsIcon },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#062544]">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#F97316]/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-[#0a3a6e]/60 rounded-full blur-3xl" aria-hidden="true" />

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-px h-full bg-[#F97316]/20 transform rotate-6 translate-x-40 origin-top hidden sm:block" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-px h-full bg-[#F97316]/10 transform rotate-12 translate-x-80 origin-top hidden sm:block" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 sm:w-12 h-0.5 bg-[#F97316]" />
              <span className="text-[#F97316] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                South Africa&apos;s Industrial Powerhouse
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] text-white mb-5 text-balance"
            >
              THE FUTURE
              <br />
              OF INDUSTRY
              <br />
              <span className="text-[#F97316]">IS INTEGRATED.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Six industries working together to build stronger communities, power progress and create lasting value across South Africa and the SADC region.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-[#F97316] hover:bg-[#ea6700] text-white font-bold rounded-md transition-all uppercase tracking-wide text-sm"
              >
                Request a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#ecosystem"
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-4 border border-white/30 hover:border-[#F97316] text-white hover:text-[#F97316] font-bold rounded-md transition-all uppercase tracking-wide text-sm"
              >
                Explore Divisions
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8 sm:pt-10"
            >
              {[
                { value: '6', label: 'Divisions' },
                { value: '9+', label: 'Provinces' },
                { value: '100+', label: 'Clients Served' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-black text-[#F97316] font-heading">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Orbit wheel — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border border-[#F97316]/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-[#F97316]/15" />

              {/* Division nodes */}
              {divisionNodes.map((div, i) => {
                const rad = (div.angle * Math.PI) / 180
                const r = 42
                const x = parseFloat((50 + r * Math.sin(rad)).toFixed(4))
                const y = parseFloat((50 - r * Math.cos(rad)).toFixed(4))
                return (
                  <div
                    key={div.label}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="w-14 h-14 rounded-full bg-[#0a3a6e] border-2 border-[#F97316]/50 flex items-center justify-center text-[#F97316] shadow-lg shadow-black/30"
                    >
                      <div.Icon />
                    </motion.div>
                    <div className="absolute left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-xs text-white/60 text-center w-20 leading-tight">
                      {div.label}
                    </div>
                  </div>
                )
              })}

              {/* Center badge */}
              <div className="absolute inset-1/4 rounded-full bg-[#031628] border border-[#F97316]/30 flex flex-col items-center justify-center ecosystem-glow">
                <div className="text-xl font-black font-heading text-white leading-none tracking-tight">TMB</div>
                <div className="text-[#F97316] text-xs font-bold tracking-widest mt-0.5 uppercase">ENTITIES</div>
                <div className="text-white/40 text-[9px] tracking-wider mt-1 uppercase text-center leading-tight px-2">
                  Six Industries
                  <br />
                  One Vision
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile divisions grid — shown only on mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:hidden mt-10"
        >
          <p className="text-white/40 text-xs uppercase tracking-widest text-center mb-4">Our Six Divisions</p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {mobileDivisions.map((div, i) => (
              <motion.div
                key={div.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="flex flex-col items-center gap-2 bg-[#0a3a6e]/50 border border-white/10 rounded-xl p-3 sm:p-4 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center text-[#F97316]">
                  <div.Icon />
                </div>
                <span className="text-white/70 text-[10px] sm:text-xs leading-tight font-medium">{div.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest hidden sm:block">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
