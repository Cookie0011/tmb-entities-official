'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, Target, Eye } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: visual block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-[#062544] rounded-2xl overflow-hidden aspect-[4/3]">
              <div
                className="absolute inset-0 opacity-10"
                aria-hidden="true"
                style={{
                  backgroundImage: `linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F97316]/20 border-2 border-[#F97316]/40 flex items-center justify-center mb-4 sm:mb-6">
                  <MapPin size={32} className="text-[#F97316]" />
                </div>
                <div className="text-[#F97316] text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">Headquartered in</div>
                <div className="text-white font-heading font-black text-2xl sm:text-3xl mb-1">Upington</div>
                <div className="text-white/60 text-sm">Northern Cape, South Africa</div>
                <div className="mt-4 sm:mt-6 text-white/40 text-xs uppercase tracking-widest">Serving South Africa &amp; the SADC Region</div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#F97316] opacity-10 rounded-bl-full" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-14 h-14 bg-[#F97316] opacity-10 rounded-tr-full" aria-hidden="true" />
            </div>

            {/* Stats badges — pinned inside the card area on mobile, floating on md+ */}
            <div className="flex justify-between mt-4 sm:mt-0 gap-3 sm:absolute sm:inset-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex-1 sm:flex-none bg-[#062544] rounded-xl p-4 sm:p-5 shadow-xl sm:absolute sm:-bottom-6 sm:-right-6"
              >
                <div className="text-[#F97316] font-heading font-black text-2xl sm:text-3xl">6+</div>
                <div className="text-white/60 text-xs uppercase tracking-wide mt-1">Years Operating</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex-1 sm:flex-none bg-[#F97316] rounded-xl p-4 sm:p-5 shadow-xl sm:absolute sm:-top-6 sm:-left-6"
              >
                <div className="text-white font-heading font-black text-2xl sm:text-3xl">9</div>
                <div className="text-white/80 text-xs uppercase tracking-wide mt-1">Provinces Covered</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-4 sm:mt-0"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 sm:w-12 h-0.5 bg-[#F97316]" />
              <span className="text-[#F97316] text-xs sm:text-sm font-semibold uppercase tracking-widest">About TMB Entities</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#062544] mb-5 text-balance">
              A Diversified Industrial Services Group
            </h2>

            <p className="text-[#1E293B]/70 leading-relaxed mb-7 text-base sm:text-lg">
              TMB Entities (Pty) Ltd is a diversified South African industrial services group delivering integrated solutions across six strategic business divisions. Headquartered in Upington, Northern Cape, we serve government departments, municipalities, mining houses, SOEs, commercial agriculture, and private-sector clients throughout South Africa and the SADC region.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#062544] flex items-center justify-center shrink-0">
                  <Eye size={18} className="text-[#F97316]" />
                </div>
                <div>
                  <div className="font-bold text-[#062544] uppercase tracking-wide text-xs sm:text-sm mb-1">Our Vision</div>
                  <p className="text-[#1E293B]/70 text-sm leading-relaxed">
                    To be the most trusted and impactful diversified industrial services group in southern Africa — recognised for operational excellence, ethical leadership, and commitment to building communities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#062544] flex items-center justify-center shrink-0">
                  <Target size={18} className="text-[#F97316]" />
                </div>
                <div>
                  <div className="font-bold text-[#062544] uppercase tracking-wide text-xs sm:text-sm mb-1">Our Mission</div>
                  <p className="text-[#1E293B]/70 text-sm leading-relaxed">
                    To deliver integrated, professional-grade industrial services across our six core divisions — consistently exceeding client expectations through technical competence and responsive service delivery.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#062544] hover:bg-[#0a3a6e] text-white font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
            >
              Learn More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
