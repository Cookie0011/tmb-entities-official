'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Package, Zap, FlaskConical, Sprout, HardHat, Truck } from 'lucide-react'

const categories = ['All', 'Supply', 'Engineering', 'Renewable Energy', 'Mining', 'Farming', 'Logistics']

const projects = [
  {
    id: 1,
    title: 'Government PPE Supply Contract',
    category: 'Supply',
    division: 'Supply & Delivery',
    icon: Package,
    location: 'Northern Cape',
    description: 'Large-scale PPE procurement and delivery for multiple Northern Cape government departments, ensuring compliance with all procurement regulations.',
    tags: ['Government', 'PPE', 'Procurement'],
  },
  {
    id: 2,
    title: 'Municipal Solar PV Installation',
    category: 'Renewable Energy',
    division: 'Engineering & Renewable Energy',
    icon: Zap,
    location: 'Upington, Northern Cape',
    description: 'Design and installation of a commercial solar PV system for a local municipality, reducing grid dependency and energy costs.',
    tags: ['Solar PV', 'Municipality', 'Clean Energy'],
  },
  {
    id: 3,
    title: 'Mining Site Cleaning Contract',
    category: 'Mining',
    division: 'Chemical & Cleaning Services',
    icon: FlaskConical,
    location: 'John Taolo Gaetsewe District',
    description: 'Ongoing industrial cleaning and waste management services for a manganese mining operation in the Northern Cape.',
    tags: ['Industrial Cleaning', 'Mining', 'Waste Management'],
  },
  {
    id: 4,
    title: 'Commercial Farm Management',
    category: 'Farming',
    division: 'Farming',
    icon: Sprout,
    location: 'Green Kalahari, Northern Cape',
    description: 'Full farm management services including crop production, irrigation management and agri-consulting for a commercial grapes and raisins operation.',
    tags: ['Crop Production', 'Irrigation', 'Farm Management'],
  },
  {
    id: 5,
    title: 'Mining Support Services',
    category: 'Mining',
    division: 'Mining',
    icon: HardHat,
    location: 'Postmasburg, Northern Cape',
    description: 'Labour provision, plant hire and equipment supply for a major iron ore operation in the Postmasburg area.',
    tags: ['Labour', 'Plant Hire', 'Iron Ore'],
  },
  {
    id: 6,
    title: 'Agricultural Bulk Transport',
    category: 'Logistics',
    division: 'Logistics',
    icon: Truck,
    location: 'Northern & Western Cape',
    description: 'Contract logistics for bulk agricultural commodity transport from Northern Cape farms to processing facilities and export terminals.',
    tags: ['Bulk Transport', 'Agriculture', 'Contract Logistics'],
  },
  {
    id: 7,
    title: 'School Stationery Supply Programme',
    category: 'Supply',
    division: 'Supply & Delivery',
    icon: Package,
    location: 'ZF Mgcawu District',
    description: 'Annual stationery supply programme for Department of Education schools across the ZF Mgcawu district municipality.',
    tags: ['Education', 'Government', 'Stationery'],
  },
  {
    id: 8,
    title: 'Electrical Infrastructure Upgrade',
    category: 'Engineering',
    division: 'Engineering & Renewable Energy',
    icon: Zap,
    location: 'Upington, Northern Cape',
    description: 'Electrical installation upgrade and switchgear replacement at a large industrial facility, improving safety and operational efficiency.',
    tags: ['Electrical', 'Industrial', 'Maintenance'],
  },
  {
    id: 9,
    title: 'Cross-Border Freight Operation',
    category: 'Logistics',
    division: 'Logistics',
    icon: Truck,
    location: 'South Africa to Namibia',
    description: 'Cross-border freight and logistics coordination for a mining supply company operating across the South African and Namibian border.',
    tags: ['Cross-Border', 'SADC', 'Freight'],
  },
]

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 bg-[#062544] overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#F97316]" />
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Our Projects</span>
              <div className="w-12 h-0.5 bg-[#F97316]" />
            </div>
            <h1 className="font-heading font-black text-5xl lg:text-7xl text-white mb-6 text-balance">
              Delivering Results Across South Africa
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              A showcase of our work across all six divisions — from government supply contracts to renewable energy installations.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all ${
                    active === cat
                      ? 'bg-[#F97316] text-white'
                      : 'bg-white border border-[#dde3ec] text-[#062544] hover:border-[#F97316] hover:text-[#F97316]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group bg-white rounded-2xl border border-[#dde3ec] overflow-hidden hover:shadow-xl transition-all hover:border-[#F97316]/30"
                  >
                    {/* Card header */}
                    <div className="bg-[#062544] p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#F97316]/10 rounded-bl-full" />
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#F97316]/20 flex items-center justify-center shrink-0">
                          <Icon size={22} className="text-[#F97316]" />
                        </div>
                        <div>
                          <div className="text-[#F97316] text-xs font-bold uppercase tracking-wide mb-1">
                            {project.division}
                          </div>
                          <h3 className="font-heading font-black text-white text-base leading-tight">{project.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-6">
                      <div className="text-[#F97316] text-xs font-semibold uppercase tracking-wide mb-3">
                        {project.location}
                      </div>
                      <p className="text-[#1E293B]/70 text-sm leading-relaxed mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-[#F5F7FA] text-[#062544] text-xs rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <p className="text-[#1E293B]/60 mb-6">Ready to add your project to our portfolio?</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#ea6700] text-white font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
              >
                Request a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
