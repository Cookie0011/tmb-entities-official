'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import PageHeader from '@/components/page-header'
import Footer from '@/components/footer'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const divisions = [
  'Supply & Delivery',
  'Engineering & Renewable Energy',
  'Chemical & Cleaning Services',
  'Farming',
  'Mining',
  'Logistics',
  'General / Multiple Divisions',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      division: (form.elements.namedItem('division') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Something went wrong.')
      }

      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <main>
        <PageHeader
          eyebrow="Get In Touch"
          title="Contact TMB Entities"
          subtitle="Ready to work together? Request a quote, ask about our divisions, or simply get in touch — we respond promptly."
          breadcrumbs={[{ label: 'Contact Us' }]}
        />

        <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

              {/* Contact info sidebar */}
              <div className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-5">
                <div className="bg-[#062544] rounded-xl p-6 sm:p-8 text-white">
                  <h3 className="font-heading font-black text-lg sm:text-xl mb-5 text-[#F97316] uppercase tracking-wide">
                    Contact Details
                  </h3>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <MapPin size={18} className="text-[#F97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-sm mb-1">Head Office</div>
                        <p className="text-white/60 text-sm leading-relaxed">
                          19 Varkoor Crescent, Progress
                          <br />
                          Upington, Northern Cape
                          <br />
                          8801, South Africa
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone size={18} className="text-[#F97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-sm mb-1">Phone</div>
                        <a href="tel:+27718457694" className="text-white/60 hover:text-[#F97316] text-sm transition-colors block">
                          071 845 7694
                        </a>
                        <a href="tel:+27754148030" className="text-white/60 hover:text-[#F97316] text-sm transition-colors block">
                          075 414 8030
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Mail size={18} className="text-[#F97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-sm mb-1">Email</div>
                        <a
                          href="mailto:info@tmbentities.co.za"
                          className="text-white/60 hover:text-[#F97316] text-sm transition-colors break-all"
                        >
                          info@tmbentities.co.za
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/27718457694?text=Hello%20TMB%20Entities%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl p-5 sm:p-6 transition-colors"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
                    <path d="M12 2a10 10 0 0 0-8.66 15l-1.34 4.9 5.03-1.31A10 10 0 1 0 12 2zm4.6 14.1c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.56.12-.17.25-.63.8-.78.97-.14.16-.29.18-.54.06a6.8 6.8 0 0 1-2-.23 7.5 7.5 0 0 1-1.38-1.72c-.15-.25-.02-.39.11-.51l.37-.43c.12-.14.16-.25.24-.41.09-.17.04-.31-.02-.44-.07-.12-.56-1.34-.77-1.83-.2-.48-.4-.41-.56-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.86.84-.86 2.04s.88 2.37 1 2.54c.13.16 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.52.59.18 1.13.16 1.55.1.47-.08 1.47-.6 1.68-1.18.2-.57.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28z" />
                  </svg>
                  <div>
                    <div className="font-bold text-base">Chat on WhatsApp</div>
                    <div className="text-white/80 text-sm">+27 71 845 7694</div>
                  </div>
                </a>

                <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#dde3ec]">
                  <h4 className="font-heading font-black text-[#062544] mb-3 text-base">Social Media</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/eldino-links-2b11b9414/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex items-center gap-2 text-sm text-[#062544]/60 hover:text-[#0A66C2] transition-colors font-medium"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="6" y="10" width="2.5" height="7" fill="currentColor" rx="0.5" />
                        <circle cx="7.25" cy="7.5" r="1.5" fill="currentColor" />
                        <path d="M11.5 10h2.5v1.2A3 3 0 0 1 17 10c2 0 3 1.2 3 3.5V17h-2.5v-3.2c0-1-.4-1.8-1.5-1.8s-1.5.8-1.5 1.8V17H11.5V10z" fill="currentColor" />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://www.facebook.com/share/1E5bQUM6Xk/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex items-center gap-2 text-sm text-[#062544]/60 hover:text-[#1877F2] transition-colors font-medium"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M13.5 8.5H15.5V6H13.5C11.57 6 10 7.57 10 9.5V11H8V13.5H10V19H12.5V13.5H14.5L15 11H12.5V9.5c0-.55.45-1 1-1z" fill="currentColor" />
                      </svg>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 min-w-0">
                <div className="bg-white rounded-xl border border-[#dde3ec] p-6 sm:p-8 shadow-sm">
                  {submitted ? (
                    <div className="text-center py-12 sm:py-16">
                      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto mb-4">
                        <CheckCircle size={36} className="text-green-600" />
                      </div>
                      <h3 className="font-heading font-black text-[#062544] text-2xl mb-2">Message Sent!</h3>
                      <p className="text-[#1E293B]/70 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. We will get back to you within one business day.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-heading font-black text-[#062544] text-xl sm:text-2xl mb-6">
                        Request a Quote / Enquiry
                      </h3>

                      {error && (
                        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
                          <AlertCircle size={16} className="shrink-0 mt-0.5" />
                          <span>{error}</span>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                          <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-[#062544] mb-1.5">
                              Full Name <span className="text-[#F97316]">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#dde3ec] rounded-lg text-[#062544] placeholder-[#062544]/40 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] text-sm transition-colors"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-[#062544] mb-1.5">
                              Company / Organisation
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#dde3ec] rounded-lg text-[#062544] placeholder-[#062544]/40 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] text-sm transition-colors"
                              placeholder="Organisation name"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                          <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-[#062544] mb-1.5">
                              Email Address <span className="text-[#F97316]">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#dde3ec] rounded-lg text-[#062544] placeholder-[#062544]/40 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] text-sm transition-colors"
                              placeholder="your@email.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-[#062544] mb-1.5">
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#dde3ec] rounded-lg text-[#062544] placeholder-[#062544]/40 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] text-sm transition-colors"
                              placeholder="+27 xx xxx xxxx"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="division" className="block text-sm font-semibold text-[#062544] mb-1.5">
                            Division of Interest <span className="text-[#F97316]">*</span>
                          </label>
                          <select
                            id="division"
                            name="division"
                            required
                            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#dde3ec] rounded-lg text-[#062544] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] text-sm transition-colors"
                          >
                            <option value="">Select a division...</option>
                            {divisions.map((d) => (
                              <option key={d} value={d}>
                                {d}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-[#062544] mb-1.5">
                            Message / Requirements <span className="text-[#F97316]">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#dde3ec] rounded-lg text-[#062544] placeholder-[#062544]/40 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] text-sm transition-colors resize-none"
                            placeholder="Describe your requirements or the services you are looking for..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="group flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#F97316] hover:bg-[#ea6700] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors uppercase tracking-wide text-sm"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Enquiry
                              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>

                        <p className="text-xs text-[#1E293B]/50 text-center leading-relaxed">
                          Your enquiry will be sent directly to{' '}
                          <span className="font-semibold text-[#062544]/70">info@tmbentities.co.za</span>
                          . We typically respond within one business day.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
