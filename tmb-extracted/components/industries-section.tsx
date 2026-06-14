'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Landmark,
  HardHat,
  Tractor,
  Stethoscope,
  GraduationCap,
  Hammer,
  Hotel,
  ShoppingCart,
  Factory,
} from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const industries = [
  { icon: Building2, label: 'Government' },
  { icon: Landmark, label: 'Municipalities' },
  { icon: HardHat, label: 'Mining' },
  { icon: Tractor, label: 'Agriculture' },
  { icon: Stethoscope, label: 'Healthcare' },
  { icon: GraduationCap, label: 'Education' },
  { icon: Hammer, label: 'Construction' },
  { icon: Hotel, label: 'Hospitality' },
  { icon: ShoppingCart, label: 'Retail' },
  { icon: Factory, label: 'SOEs' },
]

export default function IndustriesSection() {
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
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Industries We Serve</span>
            <div className="w-12 h-0.5 bg-[#F97316]" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#062544] mb-4 text-balance">
            Serving Diverse Sectors Across South Africa
          </h2>
          <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From government departments to private enterprise — our integrated service offering spans every major industry sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white hover:bg-[#062544] border border-[#dde3ec] hover:border-[#062544] rounded-xl p-6 flex flex-col items-center gap-4 transition-all cursor-default shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-[#F5F7FA] group-hover:bg-[#F97316]/20 flex items-center justify-center transition-colors">
                  <Icon size={24} className="text-[#062544] group-hover:text-[#F97316] transition-colors" />
                </div>
                <span className="font-semibold text-sm text-[#062544] group-hover:text-white transition-colors uppercase tracking-wide text-center">
                  {ind.label}
                </span>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-[#062544] hover:bg-[#062544] text-[#062544] hover:text-white font-bold rounded-md transition-all uppercase tracking-wide text-sm"
          >
            View All Industries
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
