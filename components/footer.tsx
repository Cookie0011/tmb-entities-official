import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

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

/* ── Premium outline-style SVG social icons ── */
function LinkedInIconOutline() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="4.5" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="6" y="10" width="2.5" height="7.5" fill="currentColor" rx="0.5"/>
      <circle cx="7.25" cy="7.25" r="1.5" fill="currentColor"/>
      <path d="M12 10h2.4v1.3A3.1 3.1 0 0 1 17 10c2.2 0 3.2 1.4 3.2 3.7v3.8h-2.5v-3.3c0-1.1-.4-1.9-1.5-1.9-1.1 0-1.7.8-1.7 2V17.5H12V10z" fill="currentColor"/>
    </svg>
  )
}

function FacebookIconOutline() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="4.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M13.8 8.4h2V6H13.8C11.7 6 10 7.7 10 9.8V11.5H8V14H10V19.5H12.5V14H14.5L15 11.5H12.5V9.8c0-.77.63-1.4 1.3-1.4z" fill="currentColor"/>
    </svg>
  )
}

function WhatsAppIconOutline() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.66 15l-1.34 4.9 5.03-1.31A10 10 0 1 0 12 2zm0 18.33a8.3 8.3 0 0 1-4.23-1.15l-.3-.18-3.12.82.83-3.03-.2-.31A8.33 8.33 0 1 1 12 20.33zm4.6-6.23c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.56.12-.17.25-.63.8-.78.97-.14.16-.29.18-.54.06a6.8 6.8 0 0 1-2-.23 7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.39.11-.51l.37-.43c.12-.14.16-.25.24-.41.09-.17.04-.31-.02-.44-.07-.12-.56-1.34-.77-1.83-.2-.48-.4-.41-.56-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.86.84-.86 2.04s.88 2.37 1 2.54c.13.16 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.52.59.18 1.13.16 1.55.1.47-.08 1.47-.6 1.68-1.18.2-.57.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28z"/>
    </svg>
  )
}

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
            {/* Social links */}
            <div className="flex gap-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/eldino-links-2b11b9414/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0A66C2] flex items-center justify-center transition-colors text-white/60 hover:text-white"
              >
                <LinkedInIconOutline />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1E5bQUM6Xk/?mibextid=wwXIfr"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1877F2] flex items-center justify-center transition-colors text-white/60 hover:text-white"
              >
                <FacebookIconOutline />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/27718457694?text=Hello%20TMB%20Entities%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366] flex items-center justify-center transition-colors text-white/60 hover:text-white"
              >
                <WhatsAppIconOutline />
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
                <WhatsAppIconOutline />
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
