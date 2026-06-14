import { FlaskConical } from 'lucide-react'
import DivisionPageTemplate, { type DivisionData } from '@/components/division-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TMB Chemical & Cleaning Services | Industrial & Commercial Cleaning',
  description:
    'Professional commercial and industrial cleaning, sanitisation, pest control, chemical supply and waste management services across South Africa.',
}

const division: DivisionData = {
  number: '03',
  slug: 'chemical-cleaning-services',
  title: 'Chemical & Cleaning Services',
  tagline:
    'Professional commercial and industrial cleaning, sanitisation, pest control, chemical supply and comprehensive waste management services.',
  overview:
    'TMB Chemical & Cleaning Services delivers high-standard hygiene and facility maintenance solutions to a broad range of clients. Our trained teams operate across healthcare facilities, government buildings, educational institutions, mining sites, and hospitality venues. We combine industrial-grade cleaning protocols with environmentally responsible chemical products to deliver safe, effective and compliant cleaning outcomes.',
  Icon: FlaskConical,
  services: [
    'Commercial cleaning contracts',
    'Industrial cleaning & deep cleaning',
    'Sanitisation & disinfection services',
    'Pest control & fumigation',
    'Chemical supply & distribution',
    'Waste management solutions',
    'Biohazard cleaning',
    'Post-construction cleaning',
    'Grounds maintenance',
    'Hygiene product supply',
  ],
  industries: [
    'Healthcare & Hospitals',
    'Government Buildings',
    'Educational Institutions',
    'Mining Operations',
    'Hospitality & Hotels',
    'Industrial Facilities',
    'Office Environments',
    'Retail Centres',
  ],
  valueProposition:
    'Clean, safe environments are fundamental to productivity, health and compliance. Our structured cleaning programmes are tailored to each client environment — backed by trained staff, professional equipment and industry-standard chemical products. We hold all necessary compliance certifications and operate under strict health and safety protocols.',
}

export default function ChemicalPage() {
  return <DivisionPageTemplate division={division} />
}
