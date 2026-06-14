import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Building2, Pickaxe, Wheat, Hospital, GraduationCap, ShoppingCart, Factory, Truck, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries We Serve | TMB Entities',
  description:
    'TMB Entities serves government, municipalities, mining, agriculture, healthcare, education, retail, and industrial sectors across South Africa and the SADC region.',
}

const industries = [
  {
    Icon: Building2,
    title: 'Government & Public Sector',
    desc: 'Supply, engineering, cleaning and logistics solutions for national and provincial government departments, municipalities and SOEs.',
    divisions: ['Supply & Delivery', 'Chemical & Cleaning', 'Logistics', 'Engineering'],
  },
  {
    Icon: Pickaxe,
    title: 'Mining',
    desc: 'Full-spectrum mining support services from labour and plant hire to supply, logistics and environmental compliance.',
    divisions: ['Mining', 'Supply & Delivery', 'Logistics', 'Engineering'],
  },
  {
    Icon: Wheat,
    title: 'Agriculture',
    desc: 'Farm management, crop production, irrigation, agri-processing and agricultural supply chain services.',
    divisions: ['Farming', 'Supply & Delivery', 'Logistics', 'Engineering'],
  },
  {
    Icon: Hospital,
    title: 'Healthcare & Hospitals',
    desc: 'Medical supply, cleaning, sanitisation and logistics services for public and private healthcare facilities.',
    divisions: ['Supply & Delivery', 'Chemical & Cleaning', 'Logistics'],
  },
  {
    Icon: GraduationCap,
    title: 'Education',
    desc: 'Stationery, furniture, cleaning and consumables supply for schools, colleges and universities.',
    divisions: ['Supply & Delivery', 'Chemical & Cleaning'],
  },
  {
    Icon: ShoppingCart,
    title: 'Retail & FMCG',
    desc: 'Last-mile delivery, logistics, cleaning and supply solutions for retail chains and FMCG distributors.',
    divisions: ['Logistics', 'Supply & Delivery', 'Chemical & Cleaning'],
  },
  {
    Icon: Factory,
    title: 'Industrial & Manufacturing',
    desc: 'Engineering support, plant maintenance, industrial cleaning, PPE supply and logistics for manufacturing operations.',
    divisions: ['Engineering', 'Chemical & Cleaning', 'Supply & Delivery', 'Logistics'],
  },
  {
    Icon: Truck,
    title: 'Construction & Infrastructure',
    desc: 'Materials supply, logistics, cleaning and engineering support for construction projects and infrastructure development.',
    divisions: ['Supply & Delivery', 'Logistics', 'Engineering'],
  },
]

export default function IndustriesPage() {
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
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Industries We Serve</span>
              <div className="w-12 h-0.5 bg-[#F97316]" />
            </div>
            <h1 className="font-heading font-black text-5xl lg:text-7xl text-white mb-6 text-balance">
              Serving Every Sector
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              From government and mining to agriculture, healthcare and retail — our six divisions give us the breadth to serve South Africa&apos;s most important industries with specialist expertise.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind) => {
                const Icon = ind.Icon
                return (
                  <div
                    key={ind.title}
                    className="group bg-white border border-[#dde3ec] rounded-2xl p-7 hover:border-[#F97316]/40 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#062544] flex items-center justify-center mb-5">
                      <Icon size={24} className="text-[#F97316]" />
                    </div>
                    <h2 className="font-heading font-black text-[#062544] text-lg mb-3">{ind.title}</h2>
                    <p className="text-[#1E293B]/60 text-sm leading-relaxed mb-5">{ind.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.divisions.map((div) => (
                        <span key={div} className="text-xs px-2 py-1 bg-[#F97316]/10 text-[#F97316] rounded font-semibold">
                          {div}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#062544]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-4xl text-white mb-4 text-balance">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Our six divisions cover a wide range of needs. Contact us to discuss how TMB Entities can support your specific requirements.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#ea6700] text-white font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
