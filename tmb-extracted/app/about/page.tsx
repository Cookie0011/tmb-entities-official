import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Eye, Target, MapPin, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About TMB Entities | Diversified Industrial Services Group South Africa',
  description:
    'TMB Entities (Pty) Ltd is a diversified South African industrial services group headquartered in Upington, Northern Cape, serving government, municipalities, mining and private-sector clients.',
}

export default function AboutPage() {
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
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">About Us</span>
              <div className="w-12 h-0.5 bg-[#F97316]" />
            </div>
            <h1 className="font-heading font-black text-5xl lg:text-7xl text-white mb-6 text-balance">
              Who We Are
            </h1>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              A diversified South African industrial services group delivering integrated solutions across six strategic business divisions — from the heart of the Northern Cape to every corner of South Africa.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-heading font-black text-[#062544] text-4xl mb-6">Company Overview</h2>
                <div className="space-y-4 text-[#1E293B]/70 leading-relaxed">
                  <p>
                    TMB Entities (Pty) Ltd is a diversified South African industrial services group delivering integrated solutions across six strategic business divisions. Headquartered in Upington, Northern Cape, we serve government departments, municipalities, mining houses, SOEs, commercial agriculture, and private-sector clients throughout South Africa and the SADC region.
                  </p>
                  <p>
                    Our six divisions — Supply & Delivery, Engineering & Renewable Energy, Chemical & Cleaning Services, Farming, Mining, and Logistics — are each structured as specialist service leaders in their respective fields. Together, they form a powerful, integrated group capable of delivering end-to-end industrial solutions to the most complex client requirements.
                  </p>
                  <p>
                    Founded and led by Managing Director Eldino Themba Links, TMB Entities is committed to building a company that creates lasting value — for clients, employees, and the communities in which we operate.
                  </p>
                </div>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: 'Headquarters', value: 'Upington, Northern Cape' },
                  { icon: Users, label: 'MD', value: 'Eldino Themba Links' },
                  { icon: Target, label: 'Divisions', value: '6 Integrated Divisions' },
                  { icon: Eye, label: 'Region', value: 'South Africa & SADC' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-white rounded-xl p-5 border border-[#dde3ec] shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#062544] flex items-center justify-center mb-3">
                      <Icon size={18} className="text-[#F97316]" />
                    </div>
                    <div className="text-xs text-[#1E293B]/50 uppercase tracking-wide font-semibold mb-1">{label}</div>
                    <div className="font-bold text-[#062544] text-sm leading-tight">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="mt-20 grid md:grid-cols-2 gap-8">
              <div className="bg-[#062544] rounded-2xl p-10">
                <div className="w-14 h-14 rounded-xl bg-[#F97316]/20 flex items-center justify-center mb-6">
                  <Eye size={24} className="text-[#F97316]" />
                </div>
                <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">Our Vision</div>
                <p className="text-white leading-relaxed">
                  To be the most trusted and impactful diversified industrial services group in southern Africa — recognised for operational excellence, ethical leadership, and a demonstrated commitment to building the communities and economies we serve.
                </p>
              </div>

              <div className="bg-[#F97316] rounded-2xl p-10">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <Target size={24} className="text-white" />
                </div>
                <div className="text-white/80 text-xs font-bold uppercase tracking-widest mb-3">Our Mission</div>
                <p className="text-white leading-relaxed">
                  To deliver integrated, professional-grade industrial services across our six core divisions — consistently exceeding client expectations through technical competence, responsive service delivery, and a relentless focus on value creation for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
