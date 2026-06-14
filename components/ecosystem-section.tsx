'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'

/* Premium SVG icons for each division */
function SupplyIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
      <path d="m7.5 4.27 9 5.15M3.29 7 12 12l8.71-5M12 22V12M19 16v6M16 19h6"/>
    </svg>
  )
}

function EnergyIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  )
}

function ChemicalIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M10 9v3.172a2 2 0 0 1-.586 1.414L6 17h12l-3.414-3.414A2 2 0 0 1 14 12.172V9"/>
      <path d="M8.5 17.5A2.5 2.5 0 0 0 11 20h2a2.5 2.5 0 0 0 2.5-2.5"/>
    </svg>
  )
}

function FarmingIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12"/>
      <path d="M20 7c0 4-3.6 7-8 7S4 11 4 7c0 0 4-4 8-4s8 4 8 4z"/>
      <path d="M4 22h16"/>
    </svg>
  )
}

function MiningIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 22 8.5-8.5M17 2l-5 5M15 4l5 5M7 12l5 5m2-10 3 3"/>
      <circle cx="18" cy="18" r="3"/>
      <path d="m21 21 1.5 1.5"/>
    </svg>
  )
}

function LogisticsIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
      <rect x="9" y="11" width="14" height="10" rx="2"/>
      <circle cx="12" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
    </svg>
  )
}

const divisions = [
  {
    id: 1,
    label: 'Supply & Delivery',
    Icon: SupplyIcon,
    href: '/divisions/supply-delivery',
    angle: 270,
    overview: 'End-to-end procurement, sourcing, supply and delivery solutions for government, municipalities, SOEs, mining and private-sector clients.',
    services: ['General consumables & stationery', 'PPE supply', 'Infrastructure materials', 'Agricultural & mining inputs', 'Tender procurement', 'Last-mile delivery'],
    industries: 'Government · Municipalities · Mining · Agriculture · Healthcare · Education',
  },
  {
    id: 2,
    label: 'Engineering & Renewable Energy',
    Icon: EnergyIcon,
    href: '/divisions/engineering-renewable-energy',
    angle: 330,
    overview: 'Full-spectrum engineering and renewable energy solutions from solar PV systems to electrical installations, civil support, and facilities management.',
    services: ['Solar PV systems', 'Battery energy storage', 'Electrical installations', 'Mechanical engineering', 'Plant maintenance', 'Water infrastructure'],
    industries: 'Municipalities · Agriculture · Mining · Government · Industrial · Retail',
  },
  {
    id: 3,
    label: 'Chemical & Cleaning Services',
    Icon: ChemicalIcon,
    href: '/divisions/chemical-cleaning-services',
    angle: 30,
    overview: 'Professional commercial and industrial cleaning, sanitisation, pest control, chemical supply and waste management services.',
    services: ['Commercial & industrial cleaning', 'Sanitisation & pest control', 'Chemical supply', 'Waste management', 'Biohazard cleaning', 'Post-construction cleaning'],
    industries: 'Healthcare · Government · Education · Mining · Hospitality · Industrial',
  },
  {
    id: 4,
    label: 'Farming',
    Icon: FarmingIcon,
    href: '/divisions/farming',
    angle: 90,
    overview: 'Comprehensive agricultural services including crop production, livestock farming, irrigation systems, agri-processing and farm management.',
    services: ['Crop production', 'Livestock farming', 'Irrigation systems', 'Farm management', 'Agri-processing', 'Agricultural consulting'],
    industries: 'Commercial Farming · Government · Food Retail · Export · Land Reform',
  },
  {
    id: 5,
    label: 'Mining',
    Icon: MiningIcon,
    href: '/divisions/mining',
    angle: 150,
    overview: 'Mining support services, labour provision, plant hire, equipment supply, prospecting and environmental compliance across Southern Africa.',
    services: ['Mining support services', 'Labour provision', 'Plant hire & equipment supply', 'Prospecting', 'Environmental compliance', 'Safety auditing'],
    industries: 'Iron Ore · Manganese · Diamonds · Industrial Minerals',
  },
  {
    id: 6,
    label: 'Logistics',
    Icon: LogisticsIcon,
    href: '/divisions/logistics',
    angle: 210,
    overview: 'Long haul, freight and last-mile logistics, bulk commodity transport, cold chain, cross-border and contract logistics services.',
    services: ['Long haul & freight transport', 'Last-mile delivery', 'Bulk commodity transport', 'Cold chain logistics', 'Cross-border transport', 'Warehousing'],
    industries: 'Mining · Agriculture · Retail · Construction · Government · FMCG',
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

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
    >
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
        <division.Icon size={22} />
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
    <section id="ecosystem" className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 sm:w-12 h-0.5 bg-[#F97316]" />
            <span className="text-[#F97316] text-xs sm:text-sm font-semibold uppercase tracking-widest">Our Ecosystem</span>
            <div className="w-8 sm:w-12 h-0.5 bg-[#F97316]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#062544] mb-4 text-balance">
            Six Divisions. One Integrated Group.
          </h2>
          <p className="text-[#1E293B]/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tap any division to explore its services, industries served, and value proposition.
          </p>
        </motion.div>

        {/* Mobile: card list */}
        <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {divisions.map((div, i) => (
            <motion.button
              key={div.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onClick={() => handleNodeClick(div)}
              className={`text-left flex items-start gap-4 rounded-xl border p-4 sm:p-5 transition-all w-full ${
                active?.id === div.id
                  ? 'bg-[#F97316]/10 border-[#F97316] text-[#062544]'
                  : 'bg-white border-[#dde3ec] hover:border-[#F97316]/40'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${active?.id === div.id ? 'bg-[#F97316] text-white' : 'bg-[#F5F7FA] text-[#F97316]'}`}>
                <div.Icon size={22} />
              </div>
              <div className="min-w-0">
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${active?.id === div.id ? 'text-[#F97316]' : 'text-[#F97316]/60'}`}>Division 0{div.id}</div>
                <div className="font-heading font-black text-[#062544] text-sm leading-tight">{div.label}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mobile detail panel */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={`mobile-${active.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-white rounded-2xl border border-[#dde3ec] p-5 sm:p-6 shadow-sm mb-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F97316] flex items-center justify-center shrink-0 text-white">
                    <active.Icon size={22} />
                  </div>
                  <div>
                    <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-0.5">Division 0{active.id}</div>
                    <h3 className="text-[#062544] font-heading font-black text-base sm:text-lg leading-tight">{active.label}</h3>
                  </div>
                </div>
                <button onClick={() => setActive(null)} className="text-[#062544]/40 hover:text-[#062544] p-1 shrink-0" aria-label="Close">
                  <X size={18} />
                </button>
              </div>
              <p className="text-[#1E293B]/70 text-sm leading-relaxed mb-4">{active.overview}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">Core Services</div>
                  <ul className="space-y-1.5">
                    {active.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-xs sm:text-sm text-[#1E293B]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-1.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">Industries Served</div>
                  <div className="text-xs sm:text-sm text-[#1E293B]/70 leading-relaxed">{active.industries}</div>
                </div>
              </div>
              <Link
                href={active.href}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] hover:bg-[#ea6700] text-white text-sm font-bold rounded-lg transition-colors uppercase tracking-wide"
              >
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop: wheel + detail panel */}
        <div className="hidden xl:flex gap-12 items-center">
          {/* Wheel */}
          <div className="relative w-full max-w-xl mx-auto xl:mx-0 shrink-0">
            <div className="relative w-full aspect-square">
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
                      <div className="w-14 h-14 rounded-xl bg-[#F97316] flex items-center justify-center shrink-0 text-white">
                        <active.Icon size={24} />
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
