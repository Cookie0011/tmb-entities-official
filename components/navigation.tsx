'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Divisions',
    href: '/divisions',
    children: [
      { label: 'Supply & Delivery', href: '/divisions/supply-delivery' },
      { label: 'Engineering & Renewable Energy', href: '/divisions/engineering-renewable-energy' },
      { label: 'Chemical & Cleaning Services', href: '/divisions/chemical-cleaning-services' },
      { label: 'Farming', href: '/divisions/farming' },
      { label: 'Mining', href: '/divisions/mining' },
      { label: 'Logistics', href: '/divisions/logistics' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Why TMB', href: '/why-tmb' },
  { label: 'Contact', href: '/contact' },
]

/* ── Premium SVG social icons ── */
function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.15" />
      <path d="M7.75 10h-2.5v8h2.5v-8zM6.5 8.75A1.25 1.25 0 1 0 6.5 6.25 1.25 1.25 0 0 0 6.5 8.75zM18 14c0-2.21-1.79-4-4-4a3.5 3.5 0 0 0-2.5 1.03V10h-2.5v8H11.5v-4a1.5 1.5 0 0 1 3 0v4H17v-4z" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.15" />
      <path d="M13.5 8.5H15V6H13.5C11.57 6 10 7.57 10 9.5V11H8.5v2.5H10V18h2.5v-4.5h2l.5-2.5h-2.5V9.5c0-.55.45-1 1-1z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 4a8 8 0 0 0-6.93 11.97L4 20l4.15-1.07A8 8 0 1 0 12 4zm0 14.5a6.47 6.47 0 0 1-3.3-.9l-.24-.14-2.46.64.66-2.39-.16-.25A6.5 6.5 0 1 1 12 18.5zm3.56-4.87c-.2-.1-1.16-.57-1.34-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.62.77-.11.13-.23.14-.43.05a5.38 5.38 0 0 1-1.58-.97 5.93 5.93 0 0 1-1.09-1.36c-.11-.2-.01-.3.09-.4l.29-.34c.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.37c-.13 0-.34.05-.52.25-.18.2-.68.66-.68 1.62s.7 1.88.8 2.01c.1.13 1.37 2.1 3.33 2.95.47.2.83.32 1.12.41.47.15.9.13 1.23.08.38-.06 1.16-.47 1.32-.93.17-.46.17-.85.12-.93-.05-.08-.18-.13-.38-.23z" />
    </svg>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-[#dde3ec]'
          : 'bg-white border-b border-[#dde3ec]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/tmb-logo.png"
              alt="TMB Entities Logo"
              width={140}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#062544]/80 hover:text-[#F97316] transition-colors uppercase tracking-wide"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 w-64 bg-white border border-[#dde3ec] rounded-lg shadow-xl overflow-hidden"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-[#062544]/80 hover:text-[#F97316] hover:bg-[#F5F7FA] transition-colors border-b border-[#dde3ec] last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/eldino-links-2b11b9414/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-md text-[#062544]/50 hover:text-[#0A66C2] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="6" y="10" width="2.5" height="7" fill="currentColor" rx="0.5"/>
                <circle cx="7.25" cy="7.5" r="1.5" fill="currentColor"/>
                <path d="M11.5 10h2.5v1.2A3 3 0 0 1 17 10c2 0 3 1.2 3 3.5V17h-2.5v-3.2c0-1-.4-1.8-1.5-1.8s-1.5.8-1.5 1.8V17H11.5V10z" fill="currentColor"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1E5bQUM6Xk/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-9 h-9 rounded-md text-[#062544]/50 hover:text-[#1877F2] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M13.5 8.5H15.5V6H13.5C11.57 6 10 7.57 10 9.5V11H8V13.5H10V19H12.5V13.5H14.5L15 11H12.5V9.5c0-.55.45-1 1-1z" fill="currentColor"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/27718457694?text=Hello%20TMB%20Entities%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#062544]/60 hover:text-[#25D366] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.66 15l-1.34 4.9 5.03-1.31A10 10 0 1 0 12 2zm0 18.33a8.3 8.3 0 0 1-4.23-1.15l-.3-.18-3.12.82.83-3.03-.2-.31A8.33 8.33 0 1 1 12 20.33zm4.6-6.23c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.56.12-.17.25-.63.8-.78.97-.14.16-.29.18-.54.06a6.8 6.8 0 0 1-2-.23 7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.39.11-.51l.37-.43c.12-.14.16-.25.24-.41.09-.17.04-.31-.02-.44-.07-.12-.56-1.34-.77-1.83-.2-.48-.4-.41-.56-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.86.84-.86 2.04s.88 2.37 1 2.54c.13.16 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.52.59.18 1.13.16 1.55.1.47-.08 1.47-.6 1.68-1.18.2-.57.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28z"/>
              </svg>
              <span className="hidden xl:inline font-medium">WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#F97316] hover:bg-[#ea6700] text-white text-sm font-semibold rounded-md transition-colors uppercase tracking-wide"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#062544]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#dde3ec] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-[#062544]/80 hover:text-[#F97316] font-medium uppercase tracking-wide text-sm border-b border-[#dde3ec]"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-[#062544]/60 hover:text-[#F97316] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile Social Links */}
              <div className="pt-3 flex items-center gap-3 border-b border-[#dde3ec] pb-3">
                <a
                  href="https://www.linkedin.com/in/eldino-links-2b11b9414/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-9 h-9 rounded-md bg-[#F5F7FA] text-[#062544]/60 hover:text-[#0A66C2] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <rect x="6" y="10" width="2.5" height="7" fill="currentColor" rx="0.5"/>
                    <circle cx="7.25" cy="7.5" r="1.5" fill="currentColor"/>
                    <path d="M11.5 10h2.5v1.2A3 3 0 0 1 17 10c2 0 3 1.2 3 3.5V17h-2.5v-3.2c0-1-.4-1.8-1.5-1.8s-1.5.8-1.5 1.8V17H11.5V10z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1E5bQUM6Xk/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-9 h-9 rounded-md bg-[#F5F7FA] text-[#062544]/60 hover:text-[#1877F2] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M13.5 8.5H15.5V6H13.5C11.57 6 10 7.57 10 9.5V11H8V13.5H10V19H12.5V13.5H14.5L15 11H12.5V9.5c0-.55.45-1 1-1z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
              <div className="pt-4 flex gap-3">
                <a
                  href="https://wa.me/27718457694?text=Hello%20TMB%20Entities%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center bg-[#25D366] text-white rounded-md text-sm font-semibold"
                >
                  WhatsApp Us
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 py-3 text-center bg-[#F97316] text-white rounded-md text-sm font-semibold"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
