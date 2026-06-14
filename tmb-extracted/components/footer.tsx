import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const divisionLinks = [
  { label: 'Supply & Delivery', href: '/divisions/supply-delivery' },
  { label: 'Engineering & Renewable Energy', href: '/divisions/engineering-renewable-energy' },
  { label: 'Chemical & Cleaning Services', href: '/divisions/chemical-cleaning-services' },
  { label: 'Farming', href: '/divisions/farming' },
  { label: 'Mining', href: '/divisions/mining' },
  { label: 'Logistics', href: '/divisions/logistics' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Divisions', href: '/divisions' },
  { label: 'Industries We Serve', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Why TMB', href: '/why-tmb' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#031628] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/tmb-logo.png"
              alt="TMB Entities"
              width={160}
              height={64}
              className="h-14 w-auto object-contain mb-4 [mix-blend-mode:screen]"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A diversified South African industrial services group delivering integrated solutions across six strategic business divisions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/eldino-links-2b11b9414/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0A66C2] flex items-center justify-center transition-colors text-white/60 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-black text-white uppercase tracking-widest text-sm mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-[#F97316] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="font-heading font-black text-white uppercase tracking-widest text-sm mb-6">
              Our Divisions
            </h3>
            <ul className="space-y-3">
              {divisionLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-[#F97316] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-black text-white uppercase tracking-widest text-sm mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F97316] mt-1 shrink-0" />
                <p className="text-white/50 text-sm leading-relaxed">
                  19 Varkoor Crescent, Progress,
                  <br />
                  Upington, Northern Cape
                  <br />
                  8801, South Africa
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#F97316] shrink-0" />
                <div className="text-sm">
                  <a href="tel:+27718457694" className="text-white/50 hover:text-[#F97316] transition-colors block">
                    071 845 7694
                  </a>
                  <a href="tel:+27754148030" className="text-white/50 hover:text-[#F97316] transition-colors block">
                    075 414 8030
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#F97316] shrink-0" />
                <a
                  href="mailto:info@tmbentities.co.za"
                  className="text-white/50 hover:text-[#F97316] text-sm transition-colors"
                >
                  info@tmbentities.co.za
                </a>
              </div>
              <a
                href="https://wa.me/27718457694?text=Hello%20TMB%20Entities%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2026 TMB Entities (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">
            Six Industries. One Vision.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 text-center sm:text-left">
          <p className="text-white/30 text-sm">
            Created by{' '}
            <a
              href="https://www.skyground.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#F97316] font-semibold transition-colors"
            >
              Sky Ground Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
