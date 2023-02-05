import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

type Data = {
  status: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { name, email, message } = req.body

  if (!name && !email && !message) {
    return res.status(400).json({ status: 'Bad Request' })
  }

  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'carlos.tolentinoe@gmail.com',
      pass: 'ljxdzcqmdyxttgvl',
    },
    secure: true,
  })

  const mailData = {
    from: 'carlos.tolentinoe@gmail.com',
    to: 'carlos.tolentinoe@gmail.com',
    subject: `Me ha enviado un correo desde el website ${name}`,
    text: message + ' | Sent from: ' + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
  }
  await transporter.sendMail(mailData)
  console.log(' Se envio el correo')

  return res.status(200).json({ status: 'OK' })
}
