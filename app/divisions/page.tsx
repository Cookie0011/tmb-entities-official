import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Package, Zap, FlaskConical, Sprout, HardHat, Truck, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Divisions | TMB Entities',
  description:
    'Explore all six divisions of TMB Entities — Supply & Delivery, Engineering & Renewable Energy, Chemical & Cleaning Services, Farming, Mining, and Logistics.',
}

const divisions = [
  {
    number: '01',
    title: 'Supply & Delivery',
    icon: Package,
    href: '/divisions/supply-delivery',
    desc: 'End-to-end procurement, sourcing, supply and delivery solutions for government, municipalities, SOEs, mining and private-sector clients.',
    industries: 'Government · Municipalities · Mining · Agriculture',
  },
  {
    number: '02',
    title: 'Engineering & Renewable Energy',
    icon: Zap,
    href: '/divisions/engineering-renewable-energy',
    desc: 'Solar PV systems, battery storage, electrical installations, mechanical engineering, plant maintenance and water infrastructure.',
    industries: 'Municipalities · Agriculture · Mining · Government',
  },
  {
    number: '03',
    title: 'Chemical & Cleaning Services',
    icon: FlaskConical,
    href: '/divisions/chemical-cleaning-services',
    desc: 'Commercial and industrial cleaning, sanitisation, pest control, chemical supply and waste management services.',
    industries: 'Healthcare · Government · Education · Mining',
  },
  {
    number: '04',
    title: 'Farming',
    icon: Sprout,
    href: '/divisions/farming',
    desc: 'Crop production, livestock farming, irrigation systems, agri-processing and comprehensive farm management.',
    industries: 'Commercial Farming · Government · Food Retail · Export',
  },
  {
    number: '05',
    title: 'Mining',
    icon: HardHat,
    href: '/divisions/mining',
    desc: 'Mining support services, labour provision, plant hire, equipment supply, prospecting and environmental compliance.',
    industries: 'Iron Ore · Manganese · Diamonds · Industrial Minerals',
  },
  {
    number: '06',
    title: 'Logistics',
    icon: Truck,
    href: '/divisions/logistics',
    desc: 'Long haul transport, freight, last-mile delivery, bulk commodity transport and cross-border logistics (SADC).',
    industries: 'Mining · Agriculture · Retail · Construction · Government',
  },
]

export default function DivisionsPage() {
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
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Our Divisions</span>
              <div className="w-12 h-0.5 bg-[#F97316]" />
            </div>
            <h1 className="font-heading font-black text-5xl lg:text-7xl text-white mb-6 text-balance">
              Six Industries. One Vision.
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Each TMB division is a specialised service leader in its field — together, they form an integrated industrial group capable of serving South Africa end-to-end.
            </p>
          </div>
        </section>

        {/* Divisions Grid */}
        <section className="py-24 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {divisions.map((div) => {
                const Icon = div.icon
                return (
                  <Link
                    key={div.number}
                    href={div.href}
                    className="group bg-white hover:bg-[#062544] border border-[#dde3ec] hover:border-[#062544] rounded-2xl p-8 transition-all shadow-sm hover:shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-[#F97316]/10 group-hover:bg-[#F97316] flex items-center justify-center transition-colors shrink-0">
                        <Icon size={28} className="text-[#F97316] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-1">
                          Division {div.number}
                        </div>
                        <h2 className="font-heading font-black text-[#062544] group-hover:text-white text-lg transition-colors leading-tight">
                          {div.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-[#1E293B]/70 group-hover:text-white/70 text-sm leading-relaxed mb-4 transition-colors">
                      {div.desc}
                    </p>

                    <div className="text-xs text-[#F97316] font-semibold mb-6 uppercase tracking-wide">
                      {div.industries}
                    </div>

                    <div className="flex items-center gap-2 text-[#062544] group-hover:text-[#F97316] font-semibold text-sm transition-colors">
                      Explore Division
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
