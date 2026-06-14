import type { Metadata } from 'next'
import DivisionPageTemplate from '@/components/division-page-template'
import type { DivisionData } from '@/components/division-page-template'

export const metadata: Metadata = {
  title: 'Supply & Delivery Division | TMB Entities',
  description:
    'TMB Entities Supply & Delivery Division — end-to-end procurement, sourcing, supply and delivery solutions for government, municipalities, SOEs, mining and private-sector clients across South Africa.',
}

const division: DivisionData = {
  number: '01',
  slug: 'supply-delivery',
  title: 'Supply & Delivery',
  tagline:
    'End-to-end procurement, sourcing, supply and delivery solutions for government, municipalities, SOEs, mining and private-sector clients across South Africa.',
  overview:
    'Our Supply & Delivery Division provides comprehensive procurement and supply chain solutions to a wide range of South African public and private-sector clients. We specialise in the sourcing, procurement and delivery of general consumables, PPE, infrastructure materials, agricultural inputs, mining supplies and specialised equipment — always on spec, on time and within budget.\n\nWith a robust supplier network, competitive pricing and logistics capability, we serve government departments, municipalities, SOEs, mining operations, schools and healthcare facilities. Our tender-ready processes and BEE compliance make us the preferred supply partner for clients who need reliability and accountability.',
  iconName: 'Package',
  services: [
    'General consumables & stationery',
    'Personal Protective Equipment (PPE)',
    'Infrastructure materials & hardware',
    'Agricultural & mining inputs',
    'Office furniture & equipment',
    'Cleaning & hygiene products',
    'Tender procurement & government supply',
    'Last-mile delivery & logistics coordination',
  ],
  industries: [
    'Government Departments',
    'Municipalities',
    'State-Owned Enterprises (SOEs)',
    'Mining Operations',
    'Commercial Agriculture',
    'Healthcare & Hospitals',
    'Schools & Education Facilities',
    'Construction & Infrastructure',
  ],
  valueProposition:
    'We consolidate complex, multi-category supply requirements into a single, accountable delivery partner. By combining our procurement expertise with our in-house logistics capabilities, we eliminate the fragmentation, delays and cost overruns that plague multi-vendor supply chains — delivering measurable value on every order.',
}

export default function SupplyDeliveryPage() {
  return <DivisionPageTemplate division={division} />
}
