import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import WhyTmbSection from '@/components/why-tmb-section'
import ImpactSection from '@/components/impact-section'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose TMB Entities | Trusted Industrial Services Partner',
  description:
    'Discover why government departments, municipalities, mining houses and private clients choose TMB Entities — diversified expertise, nationwide reach, full compliance and sustainable solutions.',
}

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
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Why Choose TMB</span>
              <div className="w-12 h-0.5 bg-[#F97316]" />
            </div>
            <h1 className="font-heading font-black text-5xl lg:text-7xl text-white mb-6 text-balance">
              Built for Excellence.
              <br />
              <span className="text-[#F97316]">Driven by Purpose.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              We are not just a service provider — we are a strategic partner built to deliver lasting value to clients, communities and the economy.
            </p>
          </div>
        </section>

        <WhyTmbSection />
        <ImpactSection />

        {/* CTA */}
        <section className="py-20 bg-[#F97316]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-black text-white text-4xl lg:text-5xl mb-4 text-balance">
              Ready to Work With TMB Entities?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Contact our team today and let us show you what integrated industrial excellence looks like.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#F5F7FA] text-[#062544] font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
              >
                Request a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/divisions"
                className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white hover:bg-white/10 text-white font-bold rounded-md transition-colors uppercase tracking-wide text-sm"
              >
                Explore Our Divisions
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
