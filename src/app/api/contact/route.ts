import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const body = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: body.email,
    to: "soulesmartbusiness@gmail.com",
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