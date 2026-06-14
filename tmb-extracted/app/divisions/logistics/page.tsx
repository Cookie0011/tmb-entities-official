import { Truck } from 'lucide-react'
import DivisionPageTemplate, { type DivisionData } from '@/components/division-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TMB Logistics | Freight & Transport Solutions South Africa',
  description:
    'Long haul transport, freight, last-mile delivery, bulk commodity transport, cold chain logistics and cross-border transport across South Africa and the SADC region.',
}

const division: DivisionData = {
  number: '06',
  slug: 'logistics',
  title: 'Logistics',
  tagline:
    'Long haul transport, freight, last-mile delivery, bulk commodity transport and cross-border logistics across South Africa and the SADC region.',
  overview:
    'TMB Logistics provides reliable, cost-effective freight and transport solutions for clients across South Africa. Our modern fleet and experienced operators handle everything from long-haul bulk commodity transport to time-sensitive last-mile delivery. Operating from our Northern Cape base, we serve mining, agricultural, retail, construction and government clients with professional logistics management that keeps supply chains moving.',
  Icon: Truck,
  services: [
    'Long haul transport',
    'Freight forwarding',
    'Last-mile delivery solutions',
    'Bulk commodity transport',
    'Cold chain logistics',
    'Cross-border transport (SADC)',
    'Warehousing & storage',
    'Contract logistics management',
    'Fleet management services',
    'Load tracking & reporting',
  ],
  industries: [
    'Mining Operations',
    'Commercial Agriculture',
    'Retail & FMCG',
    'Construction Industry',
    'Government Departments',
    'Mining Supply Chains',
    'Cross-Border Trade (SADC)',
  ],
  valueProposition:
    'Reliable logistics is the backbone of every industry we serve. TMB Logistics delivers more than transportation — we deliver confidence. Our fleet is maintained to the highest standards, our operators are trained and certified, and our tracking systems ensure full visibility across every delivery. From the Northern Cape to the SADC border, we keep your cargo moving.',
}

export default function LogisticsPage() {
  return <DivisionPageTemplate division={division} />
}
