import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

type Data = {
  status: string
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

const formatMessageHtml = (value: string) =>
  escapeHtml(value).replace(/\n/g, '<br />')

const getContactEmailHtml = ({
  name,
  email,
  message,
  logoUrl,
}: {
  name: string
  email: string
  message: string
  logoUrl: string
}) => `
<div style="background:#f5f7fb;padding:32px 16px;font-family:Arial,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
    <tr>
      <td style="padding:22px 24px;border-bottom:1px solid #0f172a;text-align:center;background:#0f172a;">
        <img src="${logoUrl}" alt="ctolenk" width="132" style="display:block;margin:0 auto 8px auto;height:auto;filter:drop-shadow(0 1px 0 rgba(255,255,255,0.15));" />
        <p style="margin:0;font-size:12px;letter-spacing:0.06em;color:#cbd5e1;text-transform:uppercase;">New Contact Message</p>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">
        <h1 style="margin:0 0 14px 0;font-size:22px;line-height:1.3;color:#0f172a;">Nuevo mensaje desde ctolenk.com</h1>
        <p style="margin:0 0 18px 0;font-size:15px;line-height:1.6;color:#334155;">
          Recibiste una nueva consulta desde el formulario de contacto.
        </p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 18px 0;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
          <tr>
            <td style="padding:14px 16px;">
              <p style="margin:0 0 6px 0;font-size:13px;color:#64748b;"><strong style="color:#0f172a;">Nombre:</strong> ${escapeHtml(name)}</p>
              <p style="margin:0;font-size:13px;color:#64748b;"><strong style="color:#0f172a;">Email:</strong> ${escapeHtml(email)}</p>
            </td>
          </tr>
        </table>
        <div style="padding:16px;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;">
          <p style="margin:0 0 8px 0;font-size:13px;color:#64748b;"><strong style="color:#0f172a;">Mensaje</strong></p>
          <p style="margin:0;font-size:15px;line-height:1.7;color:#1e293b;">${formatMessageHtml(message)}</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 24px;border-top:1px solid #e2e8f0;background:#ffffff;">
        <p style="margin:0;font-size:12px;line-height:1.6;color:#94a3b8;">Este correo fue generado automaticamente por el formulario de contacto de ctolenk.com.</p>
      </td>
    </tr>
  </table>
</div>
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Method Not Allowed' })
  }

  const { name, email, message } = req.body as {
    name?: string
    email?: string
    message?: string
  }

  const safeName = name?.trim()
  const safeEmail = email?.trim()
  const safeMessage = message?.trim()

  if (!safeName || !safeEmail || !safeMessage) {
    return res.status(400).json({ status: 'Bad Request' })
  }

  const emailProvider = (
    process.env.EMAIL_PROVIDER ||
    (process.env.RESEND_API_KEY ? 'resend' : 'smtp')
  ).toLowerCase()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ctolenk.com'
  const emailLogoUrl =
    process.env.EMAIL_LOGO_URL || `${siteUrl}/images/ctolenk-color.png`
  const emailFrom = process.env.EMAIL_FROM
  const emailTo = process.env.EMAIL_TO

  if (!emailFrom || !emailTo) {
    return res.status(500).json({
      status:
        'Email service not configured. Required: EMAIL_FROM and EMAIL_TO',
    })
  }

  const mailData = {
    from: emailFrom,
    to: emailTo,
    replyTo: safeEmail,
    subject: `Nuevo contacto desde ctolenk.com - ${safeName}`,
    text: [
      'Nuevo mensaje desde ctolenk.com',
      `Nombre: ${safeName}`,
      `Email: ${safeEmail}`,
      '',
      'Mensaje:',
      safeMessage,
    ].join('\n'),
    html: getContactEmailHtml({
      name: safeName,
      email: safeEmail,
      message: safeMessage,
      logoUrl: emailLogoUrl,
    }),
  }

  if (emailProvider === 'resend') {
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      return res.status(500).json({
        status:
          'Resend not configured. Required: RESEND_API_KEY, EMAIL_FROM, EMAIL_TO',
      })
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: mailData.from,
          to: [mailData.to],
          reply_to: mailData.replyTo,
          subject: mailData.subject,
          text: mailData.text,
          html: mailData.html,
        }),
      })

      if (!response.ok) {
        const responseBody = await response.text()
        return res.status(500).json({
          status:
            process.env.NODE_ENV === 'development'
              ? `Resend delivery failed: HTTP ${response.status} | ${responseBody}`
              : 'Resend delivery failed',
        })
      }
    } catch (error) {
      console.error('[contact-api] Resend delivery failed:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      return res.status(500).json({
        status:
          process.env.NODE_ENV === 'development'
            ? `Resend delivery failed: ${errorMessage}`
            : 'Resend delivery failed',
      })
    }

    return res.status(200).json({ status: 'OK' })
  }

  if (emailProvider !== 'smtp') {
    return res.status(500).json({
      status: 'Unsupported EMAIL_PROVIDER. Use "resend" or "smtp".',
    })
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 465)
  const smtpSecure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === 'true'
    : smtpPort === 465
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!smtpHost || !smtpUser || !smtpPass) {
    return res.status(500).json({
      status:
        'SMTP not configured. Required: SMTP_HOST, SMTP_USER, SMTP_PASS, EMAIL_FROM, EMAIL_TO',
    })
  }

  try {
    const transporter = createTransport({
      port: smtpPort,
      host: smtpHost,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      secure: smtpSecure,
      requireTLS: !smtpSecure,
    })

    await transporter.verify()

    await transporter.sendMail(mailData)
  } catch (error) {
    const nodemailerError = error as {
      code?: string
      command?: string
      responseCode?: number
      response?: string
      message?: string
    }
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const debugParts = [
      nodemailerError.code ? `code=${nodemailerError.code}` : null,
      nodemailerError.command ? `command=${nodemailerError.command}` : null,
      nodemailerError.responseCode
        ? `responseCode=${nodemailerError.responseCode}`
        : null,
      nodemailerError.response ? `response=${nodemailerError.response}` : null,
      `message=${errorMessage}`,
    ].filter(Boolean)

    console.error('[contact-api] Email delivery failed:', error)
    const code = nodemailerError.code || ''
    const responseCode = nodemailerError.responseCode

    if (code === 'EAUTH' || responseCode === 535) {
      return res.status(500).json({
        status:
          'SMTP authentication failed. Check SMTP_USER/SMTP_PASS (for Gmail use an App Password).',
      })
    }

    if (code === 'ECONNECTION' || code === 'ETIMEDOUT') {
      return res.status(500).json({
        status:
          'SMTP connection failed. Check SMTP_HOST/SMTP_PORT/SMTP_SECURE and network access.',
      })
    }

    if (code === 'EENVELOPE' || responseCode === 553 || responseCode === 550) {
      return res.status(500).json({
        status:
          'SMTP rejected sender/recipient. Check EMAIL_FROM and EMAIL_TO values.',
      })
    }

    return res.status(500).json({
      status:
        process.env.NODE_ENV === 'development'
          ? `Email delivery failed: ${debugParts.join(' | ')}`
          : 'Email delivery failed',
    })
  }

  return res.status(200).json({ status: 'OK' })
}
