'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react'

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
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/eldino-links-2b11b9414/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-md text-[#062544]/60 hover:text-[#0A66C2] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/27718457694?text=Hello%20TMB%20Entities%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#062544]/70 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={16} />
              <span className="hidden xl:inline">WhatsApp</span>
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
