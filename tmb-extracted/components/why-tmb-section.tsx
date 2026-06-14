'use client'

import { motion } from 'framer-motion'
import { Layers, HeartHandshake, Globe, ShieldCheck, Recycle, Users } from 'lucide-react'

const reasons = [
  {
    icon: Layers,
    title: 'Diversified Expertise',
    desc: 'Six integrated divisions working as one — offering end-to-end industrial solutions that span supply, energy, chemicals, farming, mining and logistics.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric Approach',
    desc: 'We go beyond service delivery. We build partnerships grounded in transparency, responsiveness, and a genuine commitment to client success.',
  },
  {
    icon: Globe,
    title: 'Nationwide Reach',
    desc: 'Operating across all nine provinces with deep roots in the Northern Cape, we deliver consistently — wherever South Africa needs us.',
  },
  {
    icon: ShieldCheck,
    title: 'Full Compliance',
    desc: 'Fully registered, compliant, and CIDB-accredited. We meet all regulatory, procurement, and B-BBEE requirements for government and corporate clients.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Solutions',
    desc: 'From solar PV systems to responsible farming practices, sustainability is embedded into everything we design, build, and deliver.',
  },
  {
    icon: Users,
    title: 'Community Development',
    desc: 'We actively invest in local economic development, youth empowerment, skills training and job creation in the communities we serve.',
  },
]

export default function WhyTmbSection() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#F97316]" />
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Why Choose TMB</span>
            <div className="w-12 h-0.5 bg-[#F97316]" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#062544] mb-4 text-balance">
            Built for Excellence. Driven by Purpose.
          </h2>
          <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We are not just a service provider — we are a strategic partner built to deliver lasting value.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white hover:bg-[#062544] border border-[#dde3ec] hover:border-[#062544] rounded-2xl p-8 transition-all cursor-default shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F97316]/10 group-hover:bg-[#F97316] flex items-center justify-center mb-6 transition-colors">
                  <Icon size={24} className="text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-black text-[#062544] group-hover:text-white text-lg mb-3 uppercase tracking-wide transition-colors">
                  {r.title}
                </h3>
                <p className="text-[#1E293B]/60 group-hover:text-white/70 text-sm leading-relaxed transition-colors">{r.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
