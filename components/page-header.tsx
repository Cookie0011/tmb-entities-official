import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

export default function PageHeader({ eyebrow, title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative bg-[#062544] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-2xl" />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#F97316]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#F97316] transition-colors">Home</Link>
            {breadcrumbs.map((bc, i) => (
              <span key={bc.label} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {bc.href ? (
                  <Link href={bc.href} className="hover:text-[#F97316] transition-colors">{bc.label}</Link>
                ) : (
                  <span className="text-white/70">{bc.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#F97316]" />
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">{eyebrow}</span>
          </div>
        )}

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-balance mb-4 leading-tight">{title}</h1>

        {subtitle && (
          <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
