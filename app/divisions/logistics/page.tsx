import type { Metadata } from 'next'
import DivisionPageTemplate from '@/components/division-page-template'
import type { DivisionData } from '@/components/division-page-template'

export const metadata: Metadata = {
  title: 'Logistics Division | TMB Entities',
  description:
    'TMB Entities Logistics Division — long haul transport, freight, last-mile delivery, bulk commodity transport, cold chain and cross-border SADC logistics across South Africa.',
}

const division: DivisionData = {
  number: '06',
  slug: 'logistics',
  title: 'Logistics',
  tagline:
    'Long haul transport, freight, last-mile delivery, bulk commodity transport, cold chain and cross-border SADC logistics — keeping South Africa\'s supply chains moving.',
  overview:
    'Our Logistics Division provides end-to-end transport and freight solutions to clients across South Africa and the SADC region. From bulk commodity transport for mining and agriculture to last-mile delivery for government supply contracts, retail distribution and FMCG, our logistics capabilities complement and integrate seamlessly with TMB\'s other five divisions — creating a powerful, vertically integrated service offering.\n\nWith a fleet of road freight vehicles covering long haul, medium haul and last-mile routes, our logistics teams ensure cargo arrives safely, on time and in full. We also provide cross-border freight services into Namibia, Botswana, Zimbabwe and Mozambique, with full customs compliance and documentation support.',
  iconName: 'Truck',
  services: [
    'Long haul road freight & transport',
    'Last-mile delivery services',
    'Bulk commodity transport',
    'Cold chain & temperature-controlled logistics',
    'Cross-border SADC freight',
    'Customs clearance & documentation',
    'Warehousing & distribution',
    'Contract logistics & fleet management',
  ],
  industries: [
    'Mining & Mineral Resources',
    'Commercial Agriculture',
    'Retail & FMCG',
    'Government & Public Sector',
    'Construction & Infrastructure',
    'Healthcare & Pharmaceuticals',
    'Industrial & Manufacturing',
    'Cross-Border Trade (SADC)',
  ],
  valueProposition:
    'Logistics is the connective tissue of every business — and supply chain failures have real consequences. Our Logistics Division combines operational reliability, geographic coverage and cross-division integration to provide a supply chain solution that keeps your business moving. When you work with TMB, your logistics become part of a broader integrated service ecosystem — not just a standalone transport arrangement.',
}

export default function LogisticsPage() {
  return <DivisionPageTemplate division={division} />
}
