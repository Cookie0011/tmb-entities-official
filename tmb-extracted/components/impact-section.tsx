'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Users, MapPin, Award } from 'lucide-react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { icon: TrendingUp, value: 6, suffix: '', label: 'Business Divisions', desc: 'Integrated industrial services' },
  { icon: Users, value: 500, suffix: '+', label: 'Jobs Created', desc: 'Across South Africa' },
  { icon: MapPin, value: 9, suffix: '', label: 'Provinces Covered', desc: 'Nationwide reach' },
  { icon: Award, value: 100, suffix: '+', label: 'Clients Served', desc: 'Government, mining, and more' },
]

const impactAreas = [
  { title: 'Local Economic Development', desc: 'Actively contributing to local procurement and supplier development in every region we operate.' },
  { title: 'Youth Empowerment', desc: 'Providing internships, learnerships, and employment opportunities to young South Africans.' },
  { title: 'Skills Development', desc: 'Investing in training programmes that equip workers with industry-relevant technical and professional skills.' },
  { title: 'Job Creation', desc: 'Generating sustainable employment across our six divisions and supply chain networks.' },
  { title: 'Community Upliftment', desc: 'Partnering with communities to build infrastructure, support education and drive sustainable growth.' },
]

export default function ImpactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F5F7FA] rounded-2xl p-8 border border-[#dde3ec] text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#F97316]" />
                </div>
                <div className="font-heading font-black text-5xl text-[#F97316] mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-bold text-[#062544] uppercase tracking-wide text-sm mb-1">{stat.label}</div>
                <div className="text-[#062544]/50 text-xs">{stat.desc}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Transformation & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#F97316]" />
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Transformation & Impact</span>
            <div className="w-12 h-0.5 bg-[#F97316]" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#062544] mb-4 text-balance">
            Building More Than Business
          </h2>
          <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Our success is measured not just in contracts delivered, but in communities strengthened and lives changed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {impactAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#F5F7FA] rounded-xl p-6 border border-[#dde3ec] border-l-2 border-l-[#F97316]"
            >
              <h4 className="font-bold text-[#062544] text-sm uppercase tracking-wide mb-3">{area.title}</h4>
              <p className="text-[#1E293B]/60 text-xs leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
