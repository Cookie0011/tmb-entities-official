'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Lightbulb, Leaf, Users } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We do the right thing, always.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We deliver quality without compromise.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We embrace new ideas and better ways.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'We build for today and tomorrow.',
  },
  {
    icon: Users,
    title: 'People',
    desc: 'We empower people. We uplift communities.',
  },
]

export default function ValuesBar() {
  return (
    <section className="bg-[#F97316] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-heading font-black text-white uppercase tracking-widest text-sm mb-1">
                    {v.title}
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
