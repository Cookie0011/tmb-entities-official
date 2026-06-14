import { HardHat } from 'lucide-react'
import DivisionPageTemplate, { type DivisionData } from '@/components/division-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TMB Mining | Mining Support Services South Africa',
  description:
    'Mining support services, labour provision, plant hire, equipment supply, prospecting and environmental compliance across South African mining operations.',
}

const division: DivisionData = {
  number: '05',
  slug: 'mining',
  title: 'Mining',
  tagline:
    'Mining support services, labour provision, plant hire, equipment supply and environmental compliance for South Africa\'s mining sector.',
  overview:
    'TMB Mining provides comprehensive mining support services to operations across the Northern Cape and beyond — one of South Africa\'s most mineral-rich regions. We supply skilled labour, plant and equipment, mining consumables, and compliance services to iron ore, manganese, diamond and industrial mineral operations. Our team brings deep sector knowledge and a safety-first culture to every site engagement.',
  Icon: HardHat,
  services: [
    'Mining support services',
    'Skilled labour provision',
    'Plant & equipment hire',
    'Mining equipment supply',
    'Prospecting support',
    'Environmental compliance services',
    'Safety auditing & training',
    'Materials handling',
    'Mining consumables supply',
    'Site establishment support',
  ],
  industries: [
    'Iron Ore Mining',
    'Manganese Operations',
    'Diamond Mining',
    'Industrial Minerals',
    'Aggregate & Quarrying',
    'Junior Mining Companies',
    'Major Mining Houses',
  ],
  valueProposition:
    'The Northern Cape\'s mining industry demands partners who understand the terrain, the regulations and the operational pressures. TMB Mining brings local expertise, a reliable workforce and the right equipment to every engagement. We are a compliant, safety-accredited partner that mining operations can trust to deliver — on time, on budget and within regulatory requirements.',
}

export default function MiningPage() {
  return <DivisionPageTemplate division={division} />
}
