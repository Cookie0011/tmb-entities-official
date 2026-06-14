import { Sprout } from 'lucide-react'
import DivisionPageTemplate, { type DivisionData } from '@/components/division-page-template'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TMB Farming | Agricultural Services Northern Cape',
  description:
    'Comprehensive agricultural services including crop production, livestock farming, irrigation systems, agri-processing and farm management in the Northern Cape and beyond.',
}

const division: DivisionData = {
  number: '04',
  slug: 'farming',
  title: 'Farming',
  tagline:
    'Comprehensive agricultural services rooted in the Northern Cape — from crop production and livestock farming to irrigation systems and agri-processing.',
  overview:
    'TMB Farming operates in one of South Africa\'s most productive agricultural regions — the Northern Cape. We deliver comprehensive farming services that support commercial farmers, government land reform initiatives, and rural development programmes. Our agricultural team combines hands-on farming expertise with modern agri-technology to maximise yields, reduce input costs and drive sustainable land use.',
  Icon: Sprout,
  services: [
    'Crop production management',
    'Livestock farming & management',
    'Irrigation system design & installation',
    'Farm management services',
    'Agri-processing support',
    'Agricultural consulting',
    'Land preparation',
    'Input procurement & supply',
    'Harvest coordination',
    'Agri-equipment hire',
  ],
  industries: [
    'Commercial Farming Operations',
    'Government Land Reform',
    'Food Retail & Processing',
    'Agricultural Export',
    'Rural Development Programmes',
    'Communal Farming Projects',
    'Agri-Parks Initiatives',
  ],
  valueProposition:
    'Agriculture is both our heritage and our future. TMB Farming provides the expertise, resources and partnerships that make farming operations viable, productive and sustainable — whether you are a large commercial operation or a land reform beneficiary starting from scratch. We are invested in the long-term productivity of every farm we touch.',
}

export default function FarmingPage() {
  return <DivisionPageTemplate division={division} />
}
