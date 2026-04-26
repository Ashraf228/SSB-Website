import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const body = await req.json()
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || "587")
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from =
    process.env.SMTP_FROM || process.env.REPORTS_FROM_EMAIL || user || "hello@soulesmartbusiness.com"
  const to = process.env.CONTACT_TO_EMAIL || "hello@soulesmartbusiness.com"

  if (!host || !user || !pass) {
    return Response.json({ error: "Mail server is not configured." }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  })

  await transporter.sendMail({
    from,
    replyTo: body.email,
    to,
    subject: "Neue Anfrage über Website",
    text: `
      Name: ${body.name}
      Email: ${body.email}
      Telefon: ${body.phone || "-"}
      Firma: ${body.company || "-"}
      Nachricht: ${body.message}
    `,
  })

  return Response.json({ success: true })
}
