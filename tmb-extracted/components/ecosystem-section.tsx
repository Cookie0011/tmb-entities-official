'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Package,
  Zap,
  FlaskConical,
  Sprout,
  HardHat,
  Truck,
  X,
  ArrowRight,
} from 'lucide-react'

const divisions = [
  {
    id: 1,
    label: 'Supply & Delivery',
    icon: Package,
    href: '/divisions/supply-delivery',
    angle: 270,
    overview: 'End-to-end procurement, sourcing, supply and delivery solutions for government, municipalities, SOEs, mining and private-sector clients.',
    services: ['General consumables & stationery', 'PPE supply', 'Infrastructure materials', 'Agricultural & mining inputs', 'Tender procurement', 'Last-mile delivery'],
    industries: 'Government · Municipalities · Mining · Agriculture · Healthcare · Education',
    color: '#F97316',
  },
  {
    id: 2,
    label: 'Engineering & Renewable Energy',
    icon: Zap,
    href: '/divisions/engineering-renewable-energy',
    angle: 330,
    overview: 'Full-spectrum engineering and renewable energy solutions from solar PV systems to electrical installations, civil support, and facilities management.',
    services: ['Solar PV systems', 'Battery energy storage', 'Electrical installations', 'Mechanical engineering', 'Plant maintenance', 'Water infrastructure'],
    industries: 'Municipalities · Agriculture · Mining · Government · Industrial · Retail',
    color: '#F97316',
  },
  {
    id: 3,
    label: 'Chemical & Cleaning Services',
    icon: FlaskConical,
    href: '/divisions/chemical-cleaning-services',
    angle: 30,
    overview: 'Professional commercial and industrial cleaning, sanitisation, pest control, chemical supply and waste management services.',
    services: ['Commercial & industrial cleaning', 'Sanitisation & pest control', 'Chemical supply', 'Waste management', 'Biohazard cleaning', 'Post-construction cleaning'],
    industries: 'Healthcare · Government · Education · Mining · Hospitality · Industrial',
    color: '#F97316',
  },
  {
    id: 4,
    label: 'Farming',
    icon: Sprout,
    href: '/divisions/farming',
    angle: 90,
    overview: 'Comprehensive agricultural services including crop production, livestock farming, irrigation systems, agri-processing and farm management.',
    services: ['Crop production', 'Livestock farming', 'Irrigation systems', 'Farm management', 'Agri-processing', 'Agricultural consulting'],
    industries: 'Commercial Farming · Government · Food Retail · Export · Land Reform',
    color: '#F97316',
  },
  {
    id: 5,
    label: 'Mining',
    icon: HardHat,
    href: '/divisions/mining',
    angle: 150,
    overview: 'Mining support services, labour provision, plant hire, equipment supply, prospecting and environmental compliance across Southern Africa.',
    services: ['Mining support services', 'Labour provision', 'Plant hire & equipment supply', 'Prospecting', 'Environmental compliance', 'Safety auditing'],
    industries: 'Iron Ore · Manganese · Diamonds · Industrial Minerals',
    color: '#F97316',
  },
  {
    id: 6,
    label: 'Logistics',
    icon: Truck,
    href: '/divisions/logistics',
    angle: 210,
    overview: 'Long haul, freight and last-mile logistics, bulk commodity transport, cold chain, cross-border and contract logistics services.',
    services: ['Long haul & freight transport', 'Last-mile delivery', 'Bulk commodity transport', 'Cold chain logistics', 'Cross-border transport', 'Warehousing'],
    industries: 'Mining · Agriculture · Retail · Construction · Government · FMCG',
    color: '#F97316',
  },
]

function DivisionNode({
  division,
  isActive,
  onClick,
}: {
  division: (typeof divisions)[0]
  isActive: boolean
  onClick: () => void
}) {
  const rad = (division.angle * Math.PI) / 180
  const radius = 42
  const x = 50 + radius * Math.cos(rad)
  const y = 50 + radius * Math.sin(rad)
  const Icon = division.icon

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
    >
      {/* Connection line */}
      <svg
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          width: `${Math.abs(50 - x) * 3}px`,
          height: `${Math.abs(50 - y) * 3}px`,
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{
          scale: isActive ? 1.15 : 1,
          boxShadow: isActive
            ? '0 0 0 3px rgba(249,115,22,0.8), 0 0 24px rgba(249,115,22,0.4)'
            : '0 0 0 1px rgba(249,115,22,0.2)',
        }}
        transition={{ duration: 0.2 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
          isActive ? 'bg-[#F97316]' : 'bg-white border border-[#dde3ec] hover:border-[#F97316]/40 shadow-sm hover:shadow-md'
        }`}
      >
        <Icon size={22} className={isActive ? 'text-white' : 'text-[#062544]'} />
      </motion.div>

      <div
        className={`absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-center transition-colors leading-tight w-24 ${
          isActive ? 'text-[#F97316]' : 'text-[#062544]/60'
        }`}
        style={{
          top: '100%',
          ...(division.angle > 90 && division.angle < 270 ? { top: 'auto', bottom: '100%', marginTop: 0, marginBottom: '8px' } : {}),
        }}
      >
        {division.label}
      </div>
    </div>
  )
}

export default function EcosystemSection() {
  const [active, setActive] = useState<(typeof divisions)[0] | null>(null)

  const handleNodeClick = (div: (typeof divisions)[0]) => {
    setActive(active?.id === div.id ? null : div)
  }

  return (
    <section id="ecosystem" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#F97316]" />
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Our Ecosystem</span>
            <div className="w-12 h-0.5 bg-[#F97316]" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#062544] mb-4 text-balance">
            Six Divisions. One Integrated Group.
          </h2>
          <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Click any division to explore its services, industries served, and value proposition.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-12 items-center">
          {/* Wheel */}
          <div className="relative w-full max-w-xl mx-auto xl:mx-0 shrink-0">
            <div className="relative w-full aspect-square">
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-[#dde3ec]" />
              <div className="absolute inset-[8%] rounded-full border border-[#dde3ec]/60" />
              <div className="absolute inset-[16%] rounded-full border border-[#F97316]/20" />

              {/* SVG connector lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {divisions.map((div) => {
                  const rad = (div.angle * Math.PI) / 180
                  const r = 42
                  const x = 50 + r * Math.cos(rad)
                  const y = 50 + r * Math.sin(rad)
                  return (
                    <line
                      key={div.id}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke={active?.id === div.id ? '#F97316' : 'rgba(249,115,22,0.15)'}
                      strokeWidth="0.5"
                      strokeDasharray={active?.id === div.id ? '0' : '2,2'}
                    />
                  )
                })}
              </svg>

              {/* Division nodes */}
              {divisions.map((div) => (
                <DivisionNode
                  key={div.id}
                  division={div}
                  isActive={active?.id === div.id}
                  onClick={() => handleNodeClick(div)}
                />
              ))}

              {/* Center */}
              <div className="absolute inset-[30%] rounded-full bg-[#062544] border-2 border-[#F97316]/40 flex flex-col items-center justify-center ecosystem-glow">
                <div className="text-lg font-black font-heading text-white leading-none tracking-tight">TMB</div>
                <div className="text-[#F97316] text-[10px] font-bold tracking-widest mt-0.5 uppercase">ENTITIES</div>
                <div className="text-white/50 text-[8px] tracking-wider mt-1 uppercase text-center leading-tight">
                  Six Industries
                  <br />
                  One Vision
                </div>
              </div>
            </div>
          </div>

          {/* Detail panel */}
          <div className="flex-1 min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-white rounded-2xl border border-[#dde3ec] p-8 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#F97316] flex items-center justify-center shrink-0">
                        <active.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-1">Division 0{active.id}</div>
                        <h3 className="text-[#062544] font-heading font-black text-xl">{active.label}</h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setActive(null)}
                      className="text-[#062544]/40 hover:text-[#062544] transition-colors p-1"
                      aria-label="Close"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <p className="text-[#1E293B]/70 leading-relaxed mb-6">{active.overview}</p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">Core Services</div>
                      <ul className="space-y-2">
                        {active.services.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-[#1E293B]/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-1.5 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">Industries Served</div>
                      <div className="text-sm text-[#1E293B]/70 leading-relaxed">{active.industries}</div>
                    </div>
                  </div>

                  <Link
                    href={active.href}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#ea6700] text-white text-sm font-bold rounded-lg transition-colors uppercase tracking-wide"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#F97316]/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#F97316]/50 text-3xl">&#8635;</span>
                  </div>
                  <p className="text-[#062544]/40 text-sm uppercase tracking-widest">Select a division to explore</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
