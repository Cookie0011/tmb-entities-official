import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Building2, Landmark, HardHat, Tractor, Stethoscope, GraduationCap, Hammer, Hotel, ShoppingCart, Factory } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries We Serve | TMB Entities',
  description:
    'TMB Entities serves government, municipalities, mining, agriculture, healthcare, education, construction, hospitality, retail and state-owned enterprises across South Africa.',
}

const industries = [
  {
    icon: Building2,
    title: 'Government',
    desc: 'We are a trusted supplier to national, provincial and local government departments — delivering procurement, engineering, cleaning and logistics services that meet strict public sector compliance requirements.',
    divisions: ['Supply & Delivery', 'Engineering & Renewable Energy', 'Chemical & Cleaning Services', 'Logistics'],
  },
  {
    icon: Landmark,
    title: 'Municipalities',
    desc: 'From solar installations to bulk supply contracts and fleet logistics, TMB supports municipalities across South Africa with compliant, cost-effective industrial services.',
    divisions: ['Supply & Delivery', 'Engineering & Renewable Energy', 'Logistics'],
  },
  {
    icon: HardHat,
    title: 'Mining',
    desc: 'Serving iron ore, manganese, diamond and industrial mineral operations with labour, plant hire, supplies, cleaning and logistics — from the Northern Cape to beyond.',
    divisions: ['Mining', 'Supply & Delivery', 'Chemical & Cleaning Services', 'Logistics'],
  },
  {
    icon: Tractor,
    title: 'Agriculture',
    desc: 'Supporting commercial farmers and agri-businesses with farm management, irrigation, input supply and agricultural logistics in one of South Africa\'s most productive farming regions.',
    divisions: ['Farming', 'Supply & Delivery', 'Logistics'],
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    desc: 'Providing hospitals, clinics and healthcare facilities with compliant PPE supply, industrial cleaning, sanitisation and hygiene management services.',
    divisions: ['Supply & Delivery', 'Chemical & Cleaning Services'],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Delivering stationery, consumables and cleaning services to schools and educational institutions — helping create safe, well-resourced learning environments.',
    divisions: ['Supply & Delivery', 'Chemical & Cleaning Services'],
  },
  {
    icon: Hammer,
    title: 'Construction',
    desc: 'Supplying construction materials, infrastructure consumables and transport logistics to construction companies and civil engineering projects across South Africa.',
    divisions: ['Supply & Delivery', 'Logistics'],
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    desc: 'Providing hotels, lodges and hospitality venues with comprehensive cleaning services, chemical supply and consumables procurement.',
    divisions: ['Chemical & Cleaning Services', 'Supply & Delivery'],
  },
  {
    icon: ShoppingCart,
    title: 'Retail',
    desc: 'Supporting retail chains and FMCG companies with supply, logistics, cleaning and facilities management services that keep operations running smoothly.',
    divisions: ['Supply & Delivery', 'Chemical & Cleaning Services', 'Logistics'],
  },
  {
    icon: Factory,
    title: 'State-Owned Enterprises',
    desc: 'Delivering procurement, engineering, cleaning and logistics services to SOEs and parastatals — with all the compliance, BEE credentials and governance standards required.',
    divisions: ['Supply & Delivery', 'Engineering & Renewable Energy', 'Chemical & Cleaning Services', 'Logistics'],
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
              Every Sector. One Group.
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Our integrated six-division model allows us to serve the full spectrum of South Africa&apos;s industrial economy.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((ind) => {
                const Icon = ind.icon
                return (
                  <div
                    key={ind.title}
                    className="bg-white rounded-2xl p-8 border border-[#dde3ec] shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-[#062544] flex items-center justify-center shrink-0">
                        <Icon size={24} className="text-[#F97316]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-heading font-black text-[#062544] text-xl mb-3">{ind.title}</h2>
                        <p className="text-[#1E293B]/70 text-sm leading-relaxed mb-4">{ind.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {ind.divisions.map((d) => (
                            <span
                              key={d}
                              className="px-3 py-1 bg-[#F97316]/10 text-[#F97316] text-xs font-semibold rounded-full"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
