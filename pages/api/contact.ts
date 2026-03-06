import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

type Data = {
  status: string
}

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

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
  const smtpPort = Number(process.env.SMTP_PORT || 465)
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_FROM
  const smtpPass = process.env.SMTP_PASS || process.env.PASSWORD
  const emailFrom = process.env.EMAIL_FROM || smtpUser
  const emailTo = process.env.EMAIL_TO

  if (!smtpUser || !smtpPass || !emailFrom || !emailTo) {
    return res.status(500).json({
      status:
        'Email service not configured. Required: SMTP_USER, SMTP_PASS, EMAIL_FROM, EMAIL_TO',
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
      secure: smtpPort === 465,
    })

    const mailData = {
      from: emailFrom,
      to: emailTo,
      replyTo: safeEmail,
      subject: `Nuevo contacto desde ctolenk.com - ${safeName}`,
      text: `${safeMessage}\n\nSent from: ${safeEmail}`,
      html: `<div>${safeMessage}</div><p>Sent from: ${safeEmail}</p>`,
    }
    await transporter.sendMail(mailData)
  } catch (error) {
    return res.status(500).json({ status: 'Email delivery failed' })
  }

  return res.status(200).json({ status: 'OK' })
}
