import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Package, Zap, FlaskConical, Sprout, HardHat, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects | TMB Entities',
  description:
    'Explore TMB Entities project portfolio — government supply contracts, renewable energy installations, cleaning services, farming operations, mining support and logistics across South Africa.',
}

const projects = [
  {
    icon: Package,
    division: 'Supply & Delivery',
    title: 'Municipal Consumables Supply — Northern Cape',
    description:
      'Multi-year framework contract for the supply and delivery of general consumables, stationery, PPE and cleaning materials to a Northern Cape municipality. Managed logistics coordination, warehousing and last-mile delivery across multiple satellite depots.',
    outcome: 'Consistent on-time delivery rate. Recognised as preferred supplier.',
    tags: ['Government', 'Municipality', 'Supply Chain'],
  },
  {
    icon: Zap,
    division: 'Engineering & Renewable Energy',
    title: 'Solar PV & Battery Storage — Agricultural Estate',
    description:
      'Design, supply and installation of a commercial-scale solar PV system with battery energy storage for a large agricultural estate in the Northern Cape. Eliminated reliance on Eskom supply during peak agricultural demand periods.',
    outcome: 'Significant reduction in energy costs. System operational 24/7.',
    tags: ['Renewable Energy', 'Solar PV', 'Agriculture'],
  },
  {
    icon: FlaskConical,
    division: 'Chemical & Cleaning Services',
    title: 'Healthcare Facility Deep-Clean & Ongoing Maintenance — Upington',
    description:
      'Full deep-sanitisation, pest control and ongoing commercial cleaning contract for a regional healthcare facility in Upington. Developed custom cleaning schedules aligned to clinical hygiene protocols.',
    outcome: 'Passed all hygiene compliance audits. Contract renewed annually.',
    tags: ['Healthcare', 'Cleaning', 'Government'],
  },
  {
    icon: Sprout,
    division: 'Farming',
    title: 'Irrigation Infrastructure & Crop Production — Northern Cape',
    description:
      'Supply, installation and commissioning of drip irrigation systems for a 50-hectare horticultural farm. Provided ongoing farm management advisory services and crop production planning.',
    outcome: 'Increased crop yield by over 30% compared to prior season.',
    tags: ['Farming', 'Irrigation', 'Agriculture'],
  },
  {
    icon: HardHat,
    division: 'Mining',
    title: 'Mining Labour Provision & Equipment Supply — Kalahari Manganese Field',
    description:
      'Supply of skilled and semi-skilled mining labour and equipment for a manganese mining operation in the Kalahari Manganese Field, Northern Cape. Included compliance training and ongoing safety monitoring.',
    outcome: 'Zero LTIs recorded during contract period. Client extended engagement.',
    tags: ['Mining', 'Labour', 'Northern Cape'],
  },
  {
    icon: Truck,
    division: 'Logistics',
    title: 'Government Supply Chain & Last-Mile Delivery — National',
    description:
      'End-to-end logistics support for a national government supply contract covering multiple provinces. Coordinated fleet routing, warehousing and last-mile delivery to over 40 distribution points.',
    outcome: 'All deliveries completed within contracted timeframes.',
    tags: ['Logistics', 'Government', 'National'],
  },
]

export default function ProjectsPage() {
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
              Proof in Every Project
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              A selection of projects demonstrating our capability across all six TMB Entities divisions — from government supply contracts to renewable energy installations and mining support.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="py-24 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    className="bg-white rounded-2xl border border-[#dde3ec] overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                  >
                    <div className="bg-[#062544] px-6 py-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#F97316] flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest">{p.division}</div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="font-heading font-black text-[#062544] text-lg mb-3 leading-tight">{p.title}</h2>
                      <p className="text-[#1E293B]/60 text-sm leading-relaxed mb-4">{p.description}</p>

                      <div className="bg-[#F5F7FA] rounded-lg p-4 mb-5 border border-[#dde3ec]">
                        <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-1">Outcome</div>
                        <p className="text-[#062544] text-sm font-medium">{p.outcome}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 bg-[#062544]/5 text-[#062544]/70 rounded-full font-medium border border-[#dde3ec]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#F97316]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-4xl text-white mb-4 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Contact our team today to discuss your requirements. We&apos;ll tailor a solution that delivers real results.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#F5F7FA] text-[#062544] font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
            >
              Request a Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
