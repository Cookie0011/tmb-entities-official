import type { Metadata } from 'next'
import DivisionPageTemplate from '@/components/division-page-template'
import type { DivisionData } from '@/components/division-page-template'

export const metadata: Metadata = {
  title: 'Chemical & Cleaning Services Division | TMB Entities',
  description:
    'TMB Entities Chemical & Cleaning Services Division — commercial and industrial cleaning, sanitisation, pest control, chemical supply and waste management across South Africa.',
}

const division: DivisionData = {
  number: '03',
  slug: 'chemical-cleaning-services',
  title: 'Chemical & Cleaning Services',
  tagline:
    'Professional commercial and industrial cleaning, sanitisation, pest control, chemical supply and waste management — delivered to the highest hygiene and safety standards.',
  overview:
    'Our Chemical & Cleaning Services Division provides comprehensive cleaning and hygiene solutions to a broad range of commercial, industrial, government and healthcare clients. From routine commercial cleaning and deep sanitisation to biohazard remediation, post-construction cleaning, pest control and industrial waste management, our trained teams handle the full spectrum of cleaning and hygiene requirements.\n\nWe also supply a range of industrial and commercial cleaning chemicals, hygiene products and pest control materials to clients requiring direct supply. All our operations comply with relevant occupational health, safety and environmental regulations — giving clients confidence in both the effectiveness and safety of our service delivery.',
  iconName: 'FlaskConical',
  services: [
    'Commercial & office cleaning',
    'Industrial & factory cleaning',
    'Deep sanitisation & disinfection',
    'Pest control & fumigation',
    'Chemical supply & distribution',
    'Waste management & disposal',
    'Biohazard & trauma scene cleaning',
    'Post-construction cleaning',
  ],
  industries: [
    'Government & Public Sector',
    'Healthcare & Hospitals',
    'Schools & Universities',
    'Mining Operations',
    'Hospitality & Hotels',
    'Retail & Shopping Centres',
    'Industrial & Manufacturing',
    'Food Processing & Agriculture',
  ],
  valueProposition:
    'Clean, hygienic and well-maintained facilities are fundamental to business continuity, staff health and regulatory compliance. Our Chemical & Cleaning Services Division delivers consistently high-quality results through trained personnel, professional-grade products and systematic service delivery — reducing your administrative burden and ensuring regulatory compliance at every site.',
}

export default function ChemicalCleaningServicesPage() {
  return <DivisionPageTemplate division={division} />
}
