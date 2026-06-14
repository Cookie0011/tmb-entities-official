'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Package, Zap, FlaskConical, Leaf, Sprout, HardHat, Truck, type LucideIcon } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export type DivisionIconName = 'Package' | 'Zap' | 'FlaskConical' | 'Leaf' | 'Sprout' | 'HardHat' | 'Truck'

const iconMap: Record<DivisionIconName, LucideIcon> = {
  Package,
  Zap,
  FlaskConical,
  Leaf,
  Sprout,
  HardHat,
  Truck,
}

export interface DivisionData {
  number: string
  slug: string
  title: string
  tagline: string
  overview: string
  iconName: DivisionIconName
  services: string[]
  industries: string[]
  valueProposition: string
  accentColor?: string
}

export default function DivisionPageTemplate({ division }: { division: DivisionData }) {
  const Icon = iconMap[division.iconName]
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#062544] overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl -translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href="/divisions"
                  className="text-[#F97316] text-sm hover:underline uppercase tracking-widest font-semibold"
                >
                  Divisions
                </Link>
                <span className="text-white/30">/</span>
                <span className="text-white/50 text-sm">{division.title}</span>
              </div>

              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-[#F97316] flex items-center justify-center shrink-0">
                  <Icon size={36} className="text-white" />
                </div>
                <div>
                  <div className="text-[#F97316] text-sm font-bold uppercase tracking-widest mb-2">
                    Division {division.number}
                  </div>
                  <h1 className="font-heading font-black text-4xl lg:text-6xl text-white text-balance">
                    TMB {division.title}
                  </h1>
                </div>
              </div>

              <p className="text-white/70 text-xl max-w-2xl leading-relaxed">{division.tagline}</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Overview */}
              <div className="lg:col-span-2 space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading font-black text-[#062544] text-3xl mb-4">Overview</h2>
                  <p className="text-[#1E293B]/70 text-lg leading-relaxed">{division.overview}</p>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="font-heading font-black text-[#062544] text-3xl mb-6">Core Services</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {division.services.map((s) => (
                      <div key={s} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-[#dde3ec]">
                        <CheckCircle2 size={18} className="text-[#F97316] mt-0.5 shrink-0" />
                        <span className="text-[#1E293B] text-sm">{s}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Value Proposition */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#062544] rounded-2xl p-8"
                >
                  <h3 className="font-heading font-black text-[#F97316] text-xl mb-3 uppercase tracking-wide">
                    Our Value Proposition
                  </h3>
                  <p className="text-white/70 leading-relaxed">{division.valueProposition}</p>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Industries */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-[#dde3ec] shadow-sm"
                >
                  <h3 className="font-heading font-black text-[#062544] text-lg mb-4 uppercase tracking-wide">
                    Industries Served
                  </h3>
                  <div className="space-y-2">
                    {division.industries.map((ind) => (
                      <div
                        key={ind}
                        className="flex items-center gap-2 py-2 border-b border-[#f0f0f0] last:border-0"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#F97316] shrink-0" />
                        <span className="text-[#1E293B]/80 text-sm">{ind}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#F97316] rounded-2xl p-6 text-center"
                >
                  <h3 className="font-heading font-black text-white text-xl mb-3">Ready to Work Together?</h3>
                  <p className="text-white/80 text-sm mb-5 leading-relaxed">
                    Contact our team to discuss your requirements and get a tailored quote.
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F5F7FA] text-[#062544] font-bold rounded-lg text-sm transition-colors uppercase tracking-wide w-full justify-center"
                  >
                    Request a Quote
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                {/* Other Divisions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#062544] rounded-2xl p-6"
                >
                  <h3 className="font-heading font-black text-white text-sm mb-4 uppercase tracking-widest">
                    Explore Other Divisions
                  </h3>
                  <Link
                    href="/divisions"
                    className="group flex items-center gap-2 text-[#F97316] text-sm font-semibold hover:text-white transition-colors"
                  >
                    View All 6 Divisions
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
