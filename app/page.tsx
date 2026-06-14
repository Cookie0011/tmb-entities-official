import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import ValuesBar from '@/components/values-bar'
import EcosystemSection from '@/components/ecosystem-section'
import AboutSection from '@/components/about-section'
import WhyTmbSection from '@/components/why-tmb-section'
import IndustriesSection from '@/components/industries-section'
import ImpactSection from '@/components/impact-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ValuesBar />
        <EcosystemSection />
        <AboutSection />
        <WhyTmbSection />
        <IndustriesSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  )
}
