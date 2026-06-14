import type { Metadata } from 'next'
import DivisionPageTemplate from '@/components/division-page-template'
import type { DivisionData } from '@/components/division-page-template'

export const metadata: Metadata = {
  title: 'Mining Division | TMB Entities',
  description:
    'TMB Entities Mining Division — mining support services, labour provision, plant hire, equipment supply, prospecting and environmental compliance across Southern Africa.',
}

const division: DivisionData = {
  number: '05',
  slug: 'mining',
  title: 'Mining',
  tagline:
    'Specialist mining support services, labour provision, plant hire, equipment supply, prospecting assistance and environmental compliance across Southern Africa.',
  overview:
    'The TMB Mining Division provides a comprehensive suite of mining support services to mining houses, junior miners and exploration companies operating across Southern Africa. The Northern Cape — home to world-class iron ore, manganese, diamond, copper and industrial mineral deposits — is our primary operational base, though our services extend nationally and into the SADC region.\n\nWe offer a complete range of mining support capabilities including contract labour, plant and equipment hire, mining supplies, blasting support, environmental management and regulatory compliance assistance. Our team understands the operational, regulatory and commercial pressures of modern mining — enabling us to deliver practical, cost-effective support that keeps operations running safely and efficiently.',
  iconName: 'HardHat',
  services: [
    'Contract labour provision & staffing',
    'Plant hire & heavy equipment supply',
    'Mining consumables & equipment supply',
    'Drilling & blasting support',
    'Environmental management & compliance',
    'Safety auditing & training',
    'Prospecting support services',
    'Mine infrastructure & maintenance',
  ],
  industries: [
    'Iron Ore Mining',
    'Manganese Mining',
    'Diamond & Precious Minerals',
    'Industrial Minerals',
    'Coal Mining',
    'Copper & Base Metals',
    'Junior & Exploration Mining',
    'SADC Cross-Border Mining',
  ],
  valueProposition:
    'Mining operations demand reliability, safety and regulatory compliance — without exception. Our Mining Division brings together proven operational experience, a deep understanding of the Northern Cape\'s mineral landscape, and a commitment to zero-harm service delivery. We help mining clients maintain production targets, manage costs and meet their compliance obligations with confidence.',
}

export default function MiningPage() {
  return <DivisionPageTemplate division={division} />
}
