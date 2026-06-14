import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, division, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const emailBody = `
New Enquiry / Quote Request — TMB Entities Website
====================================================

Full Name:     ${name}
Company:       ${company || 'N/A'}
Email:         ${email}
Phone:         ${phone || 'N/A'}
Division:      ${division || 'N/A'}

Message / Requirements:
${message}

====================================================
Sent via tmbentities.co.za contact form
`.trim()

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'TMB Entities Website <noreply@tmbentities.co.za>',
        to: ['info@tmbentities.co.za'],
        reply_to: email,
        subject: `New Enquiry from ${name}${company ? ` — ${company}` : ''} | TMB Entities`,
        text: emailBody,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('[TMB Contact] Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[TMB Contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
