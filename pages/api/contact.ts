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

  if (!name || !email || !message) {
    return res.status(400).json({ status: 'Bad Request' })
  }

  if (!process.env.EMAIL_FROM || !process.env.PASSWORD || !process.env.EMAIL_TO) {
    return res.status(500).json({ status: 'Email service not configured' })
  }

  try {
    const transporter = createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASSWORD,
      },
      secure: true,
    })

    const mailData = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Me ha enviado un correo desde el website ${name}`,
      text: message + ' | Sent from: ' + email,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`,
    }
    await transporter.sendMail(mailData)
  } catch (error) {
    return res.status(500).json({ status: 'Email delivery failed' })
  }

  return res.status(200).json({ status: 'OK' })
}
