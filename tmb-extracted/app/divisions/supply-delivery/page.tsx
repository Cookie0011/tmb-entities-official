import { Package } from 'lucide-react'
import DivisionPageTemplate, { type DivisionData } from '@/components/division-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TMB Supply & Delivery | Government & Industrial Procurement',
  description:
    'End-to-end procurement, sourcing, supply and delivery solutions for government departments, municipalities, SOEs, mining operations and private-sector clients.',
}

const division: DivisionData = {
  number: '01',
  slug: 'supply-delivery',
  title: 'Supply & Delivery',
  tagline:
    'End-to-end procurement, sourcing, supply and delivery solutions for government, municipalities, SOEs, mining and private-sector clients across South Africa.',
  overview:
    'TMB Supply & Delivery is the procurement backbone of the TMB Entities group. We provide end-to-end supply chain solutions — from sourcing and procurement to warehousing and last-mile delivery. Our extensive supplier network and logistical capabilities allow us to fulfil large-scale, time-sensitive supply contracts for government departments, municipalities, mining houses, and private-sector clients throughout South Africa.',
  Icon: Package,
  services: [
    'General consumables',
    'Stationery supply',
    'PPE supply',
    'Infrastructure materials',
    'Cleaning products',
    'Agricultural inputs',
    'Mining equipment & consumables',
    'Fleet consumables',
    'Tender procurement management',
    'Last-mile delivery solutions',
  ],
  industries: [
    'Government Departments',
    'Municipalities',
    'Mining Operations',
    'Agriculture',
    'Healthcare Facilities',
    'Educational Institutions',
    'Construction Companies',
    'State-Owned Enterprises (SOEs)',
  ],
  valueProposition:
    'We offer a single-supplier solution for complex, multi-item procurement requirements — eliminating the cost and complexity of managing multiple vendors. Our compliance-first approach ensures all supply contracts meet government and corporate procurement standards, while our dedicated delivery fleet ensures on-time fulfilment every time.',
}

export default function SupplyDeliveryPage() {
  return <DivisionPageTemplate division={division} />
}
