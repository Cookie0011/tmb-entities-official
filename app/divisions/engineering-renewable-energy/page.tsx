import type { Metadata } from 'next'
import DivisionPageTemplate from '@/components/division-page-template'
import type { DivisionData } from '@/components/division-page-template'

export const metadata: Metadata = {
  title: 'Engineering & Renewable Energy Division | TMB Entities',
  description:
    'TMB Entities Engineering & Renewable Energy Division — solar PV systems, battery storage, electrical installations, mechanical engineering and water infrastructure across South Africa.',
}

const division: DivisionData = {
  number: '02',
  slug: 'engineering-renewable-energy',
  title: 'Engineering & Renewable Energy',
  tagline:
    'Full-spectrum engineering and renewable energy solutions — from solar PV systems and battery storage to electrical installations, plant maintenance and water infrastructure.',
  overview:
    'The Engineering & Renewable Energy Division delivers professional engineering services and turnkey renewable energy solutions to municipalities, agricultural operations, mining houses, commercial clients and government departments. As South Africa faces increasing energy challenges, TMB Entities offers practical, cost-effective alternatives — particularly solar PV systems, hybrid energy solutions and battery storage — that reduce reliance on the national grid and lower long-term operational costs.\n\nOur experienced engineering teams handle full project lifecycle management: design, procurement, installation, commissioning and ongoing maintenance. We also provide mechanical engineering support, electrical infrastructure, civil engineering assistance and water system installations for clients across multiple sectors.',
  iconName: 'Zap',
  services: [
    'Solar PV systems (residential, commercial & industrial)',
    'Battery energy storage systems (BESS)',
    'Electrical installations & infrastructure',
    'Mechanical engineering & plant maintenance',
    'Water infrastructure & pump systems',
    'Generator installation & maintenance',
    'Energy audits & efficiency consulting',
    'Facilities management & compliance',
  ],
  industries: [
    'Municipalities & Local Government',
    'Commercial Agriculture',
    'Mining Operations',
    'Government Departments',
    'Industrial & Manufacturing',
    'Retail & Commercial Property',
    'Hospitals & Healthcare',
    'Schools & Education',
  ],
  valueProposition:
    'With energy costs rising and grid reliability declining, our Engineering & Renewable Energy Division helps clients take control of their energy future. We deliver bankable, field-proven renewable energy systems backed by rigorous engineering standards and post-installation support — ensuring clients receive long-term value from every rand invested.',
}

export default function EngineeringRenewableEnergyPage() {
  return <DivisionPageTemplate division={division} />
}
