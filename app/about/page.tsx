import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import Footer from '@/components/footer'
import { MapPin, Target, Eye, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | TMB Entities',
  description:
    'Learn about TMB Entities — a 100% Black-owned, B-BBEE Level 1 diversified industrial services group headquartered in Upington, Northern Cape.',
}

const leadership = [
  {
    name: 'Thabiso M. Baloyi',
    title: 'Founder & Managing Director',
    bio: 'Founded TMB Entities with a vision to build a diversified industrial powerhouse rooted in community, excellence and integrated service delivery across South Africa.',
  },
]

const milestones = [
  { year: '2018', event: 'TMB Entities founded in Upington, Northern Cape' },
  { year: '2019', event: 'First government supply contracts awarded' },
  { year: '2020', event: 'Engineering & Renewable Energy Division launched' },
  { year: '2021', event: 'Chemical & Cleaning Services Division established' },
  { year: '2022', event: 'Mining and Farming Divisions added to the group' },
  { year: '2023', event: 'Logistics Division launched. National footprint solidified.' },
  { year: '2024', event: 'B-BBEE Level 1 certification achieved' },
  { year: '2025', event: 'SADC regional expansion and SOE partnerships' },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          eyebrow="About TMB Entities"
          title="Who We Are"
          subtitle="A 100% Black-owned, B-BBEE Level 1 diversified South African industrial services group delivering integrated solutions across six strategic business divisions."
          breadcrumbs={[{ label: 'About Us' }]}
        />

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Eye size={22} />,
                  title: 'Our Vision',
                  text: 'To be the most trusted and impactful diversified industrial services group in southern Africa — recognised for operational excellence, ethical leadership, and commitment to building communities.',
                },
                {
                  icon: <Target size={22} />,
                  title: 'Our Mission',
                  text: 'To deliver integrated, professional-grade industrial services across our six core divisions — consistently exceeding client expectations through technical competence and responsive service delivery.',
                },
                {
                  icon: <Users size={22} />,
                  title: 'Our Values',
                  text: 'Integrity. Excellence. Innovation. Sustainability. People. These five values underpin every decision, every delivery, every relationship we build.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#F5F7FA] rounded-xl p-8 border border-[#dde3ec]">
                  <div className="w-12 h-12 rounded-lg bg-[#062544] flex items-center justify-center text-[#F97316] mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-black text-[#062544] text-xl mb-3">{item.title}</h3>
                  <p className="text-[#1E293B]/70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-0.5 bg-[#F97316]" />
                  <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Our Story</span>
                </div>
                <h2 className="font-heading text-4xl font-black text-[#062544] mb-6 text-balance">
                  Built from the Ground Up in the Northern Cape
                </h2>
                <div className="space-y-4 text-[#1E293B]/70 leading-relaxed">
                  <p>
                    TMB Entities (Pty) Ltd was founded with a singular conviction: that a well-structured, multi-division South African industrial services group could deliver greater value to clients than fragmented single-service providers.
                  </p>
                  <p>
                    Headquartered in Upington, Northern Cape, we chose to build from a region that is often underserved — and in doing so, we have created a model that combines national-scale operational reach with genuine local knowledge and commitment.
                  </p>
                  <p>
                    Today, TMB Entities operates across six strategic divisions, serves clients in all nine provinces, and is actively expanding its footprint across the SADC region. Our 100% Black ownership and B-BBEE Level 1 status reflect not just a compliance achievement, but a deep and genuine commitment to economic transformation.
                  </p>
                </div>
              </div>
              <div className="bg-[#062544] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={20} className="text-[#F97316]" />
                  <span className="text-[#F97316] text-sm font-bold uppercase tracking-widest">Headquarters</span>
                </div>
                <h3 className="font-heading font-black text-2xl mb-2">Upington, Northern Cape</h3>
                <p className="text-white/60 mb-6">South Africa 8801</p>
                <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-[#F97316] font-heading font-black text-3xl">100%</div>
                    <div className="text-white/60 text-xs uppercase tracking-wide mt-1">Black Owned</div>
                  </div>
                  <div>
                    <div className="text-[#F97316] font-heading font-black text-3xl">Level 1</div>
                    <div className="text-white/60 text-xs uppercase tracking-wide mt-1">B-BBEE Status</div>
                  </div>
                  <div>
                    <div className="text-[#F97316] font-heading font-black text-3xl">6</div>
                    <div className="text-white/60 text-xs uppercase tracking-wide mt-1">Divisions</div>
                  </div>
                  <div>
                    <div className="text-[#F97316] font-heading font-black text-3xl">9+</div>
                    <div className="text-white/60 text-xs uppercase tracking-wide mt-1">Provinces</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-[#F97316]" />
                <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Our Growth Story</span>
                <div className="w-12 h-0.5 bg-[#F97316]" />
              </div>
              <h2 className="font-heading text-4xl font-black text-[#062544]">Key Milestones</h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-[#dde3ec] hidden lg:block" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`relative flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                      <div className="bg-[#F5F7FA] rounded-xl p-5 border border-[#dde3ec] inline-block w-full">
                        <div className="text-[#F97316] font-heading font-black text-2xl mb-1">{m.year}</div>
                        <p className="text-[#062544]/80 text-sm">{m.event}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F97316] border-4 border-white shadow-md" />
                    <div className="lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
