'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react'

const divisions = [
  'Supply & Delivery',
  'Engineering & Renewable Energy',
  'Chemical & Cleaning Services',
  'Farming',
  'Mining',
  'Logistics',
  'General Enquiry',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', division: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate a submission (replace with actual API call in production)
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 bg-[#062544] overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#F97316]" />
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
              <div className="w-12 h-0.5 bg-[#F97316]" />
            </div>
            <h1 className="font-heading font-black text-5xl lg:text-7xl text-white mb-6 text-balance">
              Contact TMB Entities
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your requirements? Our team is standing by to provide expert advice and tailored solutions.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading font-black text-[#062544] text-2xl mb-6">Contact Details</h2>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#062544] flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-[#F97316]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#062544] text-sm uppercase tracking-wide mb-1">Address</div>
                        <p className="text-[#1E293B]/70 text-sm leading-relaxed">
                          19 Varkoor Crescent, Progress
                          <br />
                          Upington, Northern Cape 8801
                          <br />
                          South Africa
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#062544] flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-[#F97316]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#062544] text-sm uppercase tracking-wide mb-1">Phone</div>
                        <a href="tel:+27718457694" className="text-[#1E293B]/70 text-sm hover:text-[#F97316] transition-colors block">
                          071 845 7694
                        </a>
                        <a href="tel:+27754148030" className="text-[#1E293B]/70 text-sm hover:text-[#F97316] transition-colors block">
                          075 414 8030
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#062544] flex items-center justify-center shrink-0">
                        <Mail size={20} className="text-[#F97316]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#062544] text-sm uppercase tracking-wide mb-1">Email</div>
                        <a
                          href="mailto:info@tmbentities.co.za"
                          className="text-[#1E293B]/70 text-sm hover:text-[#F97316] transition-colors"
                        >
                          info@tmbentities.co.za
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Managing Director */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#062544] rounded-2xl p-6"
                >
                  <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">
                    Managing Director
                  </div>
                  <div className="text-white font-heading font-black text-xl mb-1">Eldino Themba Links</div>
                  <div className="text-white/50 text-sm mb-4">TMB Entities (Pty) Ltd</div>
                  <a
                    href="https://wa.me/27718457694?text=Hello%20TMB%20Entities%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Direct
                  </a>
                </motion.div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-[#dde3ec]"
                >
                  <h2 className="font-heading font-black text-[#062544] text-2xl mb-2">Request a Quote</h2>
                  <p className="text-[#1E293B]/60 text-sm mb-8">
                    Fill in your details below and our team will get back to you within 24 hours.
                  </p>

                  {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle2 size={36} className="text-green-600" />
                      </div>
                      <h3 className="font-heading font-black text-[#062544] text-2xl mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-[#1E293B]/60 max-w-sm leading-relaxed">
                        Thank you for reaching out. Our team will review your enquiry and respond within 24 hours.
                      </p>
                      <button
                        onClick={() => { setStatus('idle'); setForm({ name: '', company: '', email: '', phone: '', division: '', message: '' }) }}
                        className="mt-6 px-6 py-3 bg-[#F97316] hover:bg-[#ea6700] text-white font-semibold rounded-lg transition-colors text-sm"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-[#062544] uppercase tracking-wide mb-2">
                            Full Name *
                          </label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-3 border border-[#dde3ec] rounded-lg text-sm text-[#062544] placeholder-[#1E293B]/30 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#062544] uppercase tracking-wide mb-2">
                            Company
                          </label>
                          <input
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full px-4 py-3 border border-[#dde3ec] rounded-lg text-sm text-[#062544] placeholder-[#1E293B]/30 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-[#062544] uppercase tracking-wide mb-2">
                            Email Address *
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 border border-[#dde3ec] rounded-lg text-sm text-[#062544] placeholder-[#1E293B]/30 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#062544] uppercase tracking-wide mb-2">
                            Phone Number
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+27 XX XXX XXXX"
                            className="w-full px-4 py-3 border border-[#dde3ec] rounded-lg text-sm text-[#062544] placeholder-[#1E293B]/30 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#062544] uppercase tracking-wide mb-2">
                          Division Required *
                        </label>
                        <select
                          name="division"
                          value={form.division}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#dde3ec] rounded-lg text-sm text-[#062544] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors bg-white"
                        >
                          <option value="">Select a division...</option>
                          {divisions.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#062544] uppercase tracking-wide mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Describe your requirements in detail..."
                          className="w-full px-4 py-3 border border-[#dde3ec] rounded-lg text-sm text-[#062544] placeholder-[#1E293B]/30 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors resize-none"
                        />
                      </div>

                      {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-600 text-sm">
                          <AlertCircle size={16} />
                          Something went wrong. Please try again or email us directly.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#ea6700] disabled:opacity-60 text-white font-bold rounded-lg transition-colors uppercase tracking-wide text-sm"
                      >
                        {status === 'sending' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
