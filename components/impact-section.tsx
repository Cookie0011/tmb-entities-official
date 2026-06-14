'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '6', suffix: '', label: 'Integrated Divisions', desc: 'Supply, Engineering, Chemical, Farming, Mining & Logistics' },
  { value: '100', suffix: '+', label: 'Clients Served', desc: 'Government, municipalities, mining houses, SOEs and private sector' },
  { value: '9', suffix: '', label: 'Provinces Covered', desc: 'All nine provinces of South Africa plus the SADC region' },
  { value: '1', suffix: '', label: 'Integrated Vision', desc: 'One group. One purpose. Empowering South Africa.' },
]

export default function ImpactSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#F5F7FA]">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6,37,68,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(6,37,68,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#F97316]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#F97316]" />
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Our Impact</span>
            <div className="w-12 h-0.5 bg-[#F97316]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#062544] mb-4 text-balance">
            Measuring What Matters
          </h2>
          <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Impact through integrated service delivery, B-BBEE empowerment, job creation and community investment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl border border-[#dde3ec] p-8 text-center shadow-sm"
            >
              <div className="font-heading text-6xl font-black text-[#F97316] leading-none mb-2">
                {stat.value}
                <span className="text-4xl">{stat.suffix}</span>
              </div>
              <div className="text-[#062544] font-bold text-sm uppercase tracking-wide mb-3">{stat.label}</div>
              <p className="text-[#1E293B]/60 text-xs leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#062544] rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-12 text-center"
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#F97316]" />
          <div className="relative z-10">
            <div className="text-[#F97316] text-sm font-semibold uppercase tracking-widest mb-3">Ready to Work Together?</div>
            <h3 className="font-heading font-black text-white text-2xl sm:text-3xl lg:text-4xl mb-4 text-balance">
              Let&apos;s Build Something Meaningful.
            </h3>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Whether you need a single-division service or a fully integrated multi-division solution, we&apos;re here to deliver.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#ea6700] text-white font-bold rounded-md transition-all uppercase tracking-wide text-sm"
              >
                Request a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/27718457694?text=Hello%20TMB%20Entities%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-md transition-all uppercase tracking-wide text-sm"
              >
                WhatsApp Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.66 15l-1.34 4.9 5.03-1.31A10 10 0 1 0 12 2zm4.6 14.1c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.56.12-.17.25-.63.8-.78.97-.14.16-.29.18-.54.06a6.8 6.8 0 0 1-2-.23 7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.39.11-.51l.37-.43c.12-.14.16-.25.24-.41.09-.17.04-.31-.02-.44-.07-.12-.56-1.34-.77-1.83-.2-.48-.4-.41-.56-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.86.84-.86 2.04s.88 2.37 1 2.54c.13.16 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.52.59.18 1.13.16 1.55.1.47-.08 1.47-.6 1.68-1.18.2-.57.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
