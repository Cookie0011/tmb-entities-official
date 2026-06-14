import { Zap } from 'lucide-react'
import DivisionPageTemplate, { type DivisionData } from '@/components/division-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TMB Engineering & Renewable Energy | Solar PV & Industrial Engineering',
  description:
    'Solar PV systems, electrical installations, mechanical engineering, plant maintenance and full-spectrum renewable energy solutions across South Africa.',
}

const division: DivisionData = {
  number: '02',
  slug: 'engineering-renewable-energy',
  title: 'Engineering & Renewable Energy',
  tagline:
    'Full-spectrum engineering and renewable energy solutions — from solar PV design and installation to electrical works, mechanical engineering and facilities management.',
  overview:
    'TMB Engineering & Renewable Energy delivers professional engineering and clean energy solutions that power industry, agriculture and communities. Our certified engineers and technicians design, install and maintain solar PV systems, battery storage solutions, electrical infrastructure and water systems for clients across the Northern Cape and beyond. We are committed to sustainable energy as a driver of economic development.',
  Icon: Zap,
  services: [
    'Solar PV system design & installation',
    'Battery energy storage solutions',
    'Electrical installations & upgrades',
    'Mechanical engineering services',
    'Plant maintenance & servicing',
    'Facilities management',
    'Civil engineering support',
    'Water infrastructure projects',
    'Energy audits & assessments',
    'Operation & maintenance contracts',
  ],
  industries: [
    'Municipalities',
    'Commercial Agriculture',
    'Mining Operations',
    'Government Departments',
    'Industrial Facilities',
    'Retail & Commercial',
    'Hospitality Sector',
    'Educational Institutions',
  ],
  valueProposition:
    'We bridge the gap between engineering capability and renewable energy innovation. Our solutions are designed for the South African context — robust, cost-effective and built to perform in demanding environments. From grid-tied commercial installations to off-grid rural solutions, we deliver energy independence and long-term operational savings.',
}

export default function EngineeringPage() {
  return <DivisionPageTemplate division={division} />
}
