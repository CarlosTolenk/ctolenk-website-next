import type { NextApiRequest, NextApiResponse } from 'next'
import * as dotenv from 'dotenv'
import { createTransport } from 'nodemailer'

type Data = {
  status: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  dotenv.config()
  const { name, email, message } = req.body

  if (!name && !email && !message) {
    return res.status(400).json({ status: 'Bad Request' })
  }

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
    from: 'carlos.tolentinoe@gmail.com',
    to: process.env.EMAIL_FROM,
    subject: `Me ha enviado un correo desde el website ${name}`,
    text: message + ' | Sent from: ' + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
  }
  await transporter.sendMail(mailData)

  return res.status(200).json({ status: 'OK' })
}
