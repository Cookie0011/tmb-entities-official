import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why TMB Entities | What Sets Us Apart',
  description:
    'Discover why government, municipalities, mining houses and private-sector clients choose TMB Entities — B-BBEE Level 1, 100% Black-owned, six integrated divisions, national reach.',
}

/* Premium inline SVG icons */
function IntegratedIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  )
}

function BeeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  )
}

function ReachIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}

function ScaleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  )
}

function TrackIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}

function CommunityIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

const reasons = [
  {
    Icon: IntegratedIcon,
    title: 'Integrated Group Synergy',
    description:
      'Six divisions under one roof means seamless cross-division coordination — reducing cost, complexity and delivery time for clients who need multi-service solutions. Instead of managing multiple vendors, you manage one partner.',
    bullets: [
      'Single point of accountability',
      'Cross-division service bundling',
      'Streamlined procurement & invoicing',
      'Coordinated project management',
    ],
  },
  {
    Icon: BeeIcon,
    title: '100% Black-Owned & B-BBEE Level 1',
    description:
      'TMB Entities is 100% Black-owned and holds B-BBEE Level 1 contributor status (EME). We actively invest in SMME development, enterprise support and employment equity — making us a procurement-preferred partner for government, SOEs and large corporates with BEE obligations.',
    bullets: [
      '100% Black ownership',
      'B-BBEE Level 1 EME status',
      'Enterprise & supplier development',
      'Employment equity champion',
    ],
  },
  {
    Icon: ReachIcon,
    title: 'Nationally Reaching. Locally Grounded.',
    description:
      'Rooted in the Northern Cape — a region that produces a significant share of South Africa\'s mining and agricultural output — our operations span all nine provinces and extend across the SADC region. Local knowledge, national reach.',
    bullets: [
      'HQ: Upington, Northern Cape',
      'All nine provinces covered',
      'SADC regional capability',
      'Local relationships, national infrastructure',
    ],
  },
  {
    Icon: ScaleIcon,
    title: 'Flexible, Scalable Operations',
    description:
      'From SMME-level supply requirements to large-scale SOE contracts, our operational model scales to meet your needs. We deploy the right resources, at the right scale, without compromising quality.',
    bullets: [
      'SMME to SOE scale',
      'Responsive resource deployment',
      'Contract and framework agreements',
      'Competitive, transparent pricing',
    ],
  },
  {
    Icon: TrackIcon,
    title: 'Proven Delivery Track Record',
    description:
      'Our client base includes government departments, municipalities, mining houses, SOEs and private-sector companies — each validating our capability through repeat business and long-term contracts. We measure ourselves by outcomes, not outputs.',
    bullets: [
      'Government & municipal clients',
      'Mining house partnerships',
      'SOE-approved supplier status',
      'High contract renewal rate',
    ],
  },
  {
    Icon: CommunityIcon,
    title: 'Community Impact First',
    description:
      'TMB Entities was built to create value beyond the bottom line. From job creation and skills development to local enterprise support and community investment, we embed impact into our operations — because thriving communities are the foundation of a thriving business.',
    bullets: [
      'Job creation at every site',
      'Skills development & training',
      'Local enterprise support',
      'Community investment programmes',
    ],
  },
]

const stats = [
  { value: '100%', label: 'Black Owned' },
  { value: 'Level 1', label: 'B-BBEE Status' },
  { value: '6', label: 'Divisions' },
  { value: '9+', label: 'Provinces' },
  { value: '100+', label: 'Clients Served' },
  { value: 'SADC', label: 'Regional Reach' },
]

export default function WhyTmbPage() {
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
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Why TMB Entities</span>
              <div className="w-12 h-0.5 bg-[#F97316]" />
            </div>
            <h1 className="font-heading font-black text-5xl lg:text-7xl text-white mb-6 text-balance">
              What Sets Us Apart
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              We are not just a service provider. We are a strategic partner committed to driving real impact across South Africa&apos;s industrial landscape.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#F97316] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-white font-heading font-black text-3xl">{s.value}</div>
                  <div className="text-white/80 text-xs uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons */}
        <section className="py-24 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className={`grid lg:grid-cols-2 gap-12 items-start bg-white rounded-2xl p-10 border border-[#dde3ec] shadow-sm ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shrink-0">
                        <r.Icon />
                      </div>
                      <h2 className="font-heading font-black text-[#062544] text-2xl leading-tight">{r.title}</h2>
                    </div>
                    <p className="text-[#1E293B]/70 leading-relaxed">{r.description}</p>
                  </div>
                  <div className="bg-[#062544] rounded-xl p-8">
                    <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-5">Key Points</div>
                    <ul className="space-y-3">
                      {r.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#F97316] mt-0.5 shrink-0" />
                          <span className="text-white/80 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#062544]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-4xl text-white mb-4 text-balance">
              Ready to Partner with TMB Entities?
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Contact us today to discuss how our integrated industrial services group can deliver real value for your organisation.
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
