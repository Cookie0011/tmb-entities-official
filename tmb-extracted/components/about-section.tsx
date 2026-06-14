'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, Target, Eye } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image area */}
            <div className="relative bg-[#062544] rounded-2xl overflow-hidden aspect-[4/3]">
              {/* Pattern background */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Centered content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-24 h-24 rounded-full bg-[#F97316]/20 border-2 border-[#F97316]/40 flex items-center justify-center mb-6">
                  <MapPin size={36} className="text-[#F97316]" />
                </div>
                <div className="text-[#F97316] text-sm font-bold uppercase tracking-widest mb-2">Headquartered in</div>
                <div className="text-white font-heading font-black text-3xl mb-1">Upington</div>
                <div className="text-white/60 text-sm">Northern Cape, South Africa</div>
                <div className="mt-6 text-white/40 text-xs uppercase tracking-widest">Serving South Africa & the SADC Region</div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F97316] opacity-10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#F97316] opacity-10 rounded-tr-full" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[#062544] rounded-xl p-5 shadow-xl"
            >
              <div className="text-[#F97316] font-heading font-black text-3xl">6+</div>
              <div className="text-white/60 text-xs uppercase tracking-wide mt-1">Years Operating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -left-6 bg-[#F97316] rounded-xl p-5 shadow-xl"
            >
              <div className="text-white font-heading font-black text-3xl">9</div>
              <div className="text-white/80 text-xs uppercase tracking-wide mt-1">Provinces Covered</div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#F97316]" />
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">About TMB Entities</span>
            </div>

            <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#062544] mb-6 text-balance">
              A Diversified Industrial Services Group
            </h2>

            <p className="text-[#1E293B]/70 leading-relaxed mb-8 text-lg">
              TMB Entities (Pty) Ltd is a diversified South African industrial services group delivering integrated solutions across six strategic business divisions. Headquartered in Upington, Northern Cape, we serve government departments, municipalities, mining houses, SOEs, commercial agriculture, and private-sector clients throughout South Africa and the SADC region.
            </p>

            {/* Vision & Mission */}
            <div className="space-y-5 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#062544] flex items-center justify-center shrink-0">
                  <Eye size={18} className="text-[#F97316]" />
                </div>
                <div>
                  <div className="font-bold text-[#062544] uppercase tracking-wide text-sm mb-1">Our Vision</div>
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
                  <div className="font-bold text-[#062544] uppercase tracking-wide text-sm mb-1">Our Mission</div>
                  <p className="text-[#1E293B]/70 text-sm leading-relaxed">
                    To deliver integrated, professional-grade industrial services across our six core divisions — consistently exceeding client expectations through technical competence and responsive service delivery.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#062544] hover:bg-[#0a3a6e] text-white font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
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
