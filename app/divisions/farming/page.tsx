import type { Metadata } from 'next'
import DivisionPageTemplate from '@/components/division-page-template'
import type { DivisionData } from '@/components/division-page-template'

export const metadata: Metadata = {
  title: 'Farming Division | TMB Entities',
  description:
    'TMB Entities Farming Division — crop production, livestock farming, irrigation systems, agri-processing and comprehensive farm management across South Africa.',
}

const division: DivisionData = {
  number: '04',
  slug: 'farming',
  title: 'Farming',
  tagline:
    'Comprehensive agricultural services including crop production, livestock farming, irrigation systems, agri-processing and full-cycle farm management.',
  overview:
    'The TMB Farming Division delivers professional agricultural services to commercial farmers, land reform beneficiaries, government agricultural programmes and agri-businesses across South Africa. Operating in the Northern Cape and beyond, we leverage the region\'s unique agricultural potential — particularly in horticulture, livestock and dryland and irrigation farming.\n\nWe provide turnkey farm management services, irrigation infrastructure, crop production expertise and agri-processing support. Our teams work with clients to optimise yields, reduce input costs and implement modern, sustainable farming practices — supporting both large commercial operations and emerging farmers through knowledge transfer and hands-on management.',
  iconName: 'Sprout',
  services: [
    'Crop production & management',
    'Livestock farming & management',
    'Irrigation system installation & maintenance',
    'Farm management services',
    'Agri-processing & value addition',
    'Land preparation & soil management',
    'Agricultural consulting & advisory',
    'Land reform & development support',
  ],
  industries: [
    'Commercial Farming Operations',
    'Government Agricultural Programmes',
    'Land Reform Beneficiaries',
    'Food Retail & Distribution',
    'Export & Agri-processing',
    'Irrigation Schemes',
    'Rural Development Programmes',
    'Food Security Initiatives',
  ],
  valueProposition:
    'Agriculture is the backbone of food security and rural economic development. Our Farming Division combines modern agronomy, practical experience and sustainable practices to help our clients produce more, waste less and build viable, long-term agricultural enterprises — contributing to South Africa\'s food security and rural prosperity.',
}

export default function FarmingPage() {
  return <DivisionPageTemplate division={division} />
}
