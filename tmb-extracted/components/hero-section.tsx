'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#062544]">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0a3a6e]/60 rounded-full blur-3xl" />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-[#F97316]/20 transform rotate-6 translate-x-40 origin-top" />
      <div className="absolute top-0 right-0 w-px h-full bg-[#F97316]/10 transform rotate-12 translate-x-80 origin-top" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-[#F97316]" />
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">
                South Africa&apos;s Industrial Powerhouse
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black leading-none text-white mb-4 text-balance"
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
              className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Six industries working together to build stronger communities, power progress and create lasting value across South Africa and the SADC region.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#ea6700] text-white font-bold rounded-md transition-all uppercase tracking-wide text-sm"
              >
                Request a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#ecosystem"
                className="group flex items-center gap-2 px-8 py-4 border border-white/30 hover:border-[#F97316] text-white hover:text-[#F97316] font-bold rounded-md transition-all uppercase tracking-wide text-sm"
              >
                Explore Our Divisions
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 grid grid-cols-3 gap-8 border-t border-white/10 pt-10"
            >
              {[
                { value: '6', label: 'Divisions' },
                { value: '9+', label: 'Provinces' },
                { value: '100+', label: 'Clients Served' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-[#F97316] font-heading">{stat.value}</div>
                  <div className="text-sm text-white/50 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Central badge */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[#F97316]/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-[#F97316]/15" />

              {/* Division nodes */}
              {[
                { label: 'Supply & Delivery', angle: 0, icon: '📦' },
                { label: 'Engineering', angle: 60, icon: '⚡' },
                { label: 'Chemical Services', angle: 120, icon: '🧪' },
                { label: 'Farming', angle: 180, icon: '🌾' },
                { label: 'Mining', angle: 240, icon: '⛏' },
                { label: 'Logistics', angle: 300, icon: '🚛' },
              ].map((div, i) => {
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
                      className="w-14 h-14 rounded-full bg-[#0a3a6e] border-2 border-[#F97316]/50 flex items-center justify-center text-xl shadow-lg shadow-black/30"
                    >
                      <span role="img" aria-hidden="true">{div.icon}</span>
                    </motion.div>
                    <div className="absolute left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-xs text-white/60 text-center w-20 leading-tight">
                      {div.label}
                    </div>
                  </div>
                )
              })}

              {/* Center logo area */}
              <div className="absolute inset-1/4 rounded-full bg-[#031628] border border-[#F97316]/30 flex flex-col items-center justify-center ecosystem-glow">
                <div className="text-xl font-black font-heading text-white leading-none tracking-tight">
                  <span className="text-white">TMB</span>
                </div>
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
