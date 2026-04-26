import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || "587")
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const from =
      process.env.SMTP_FROM || process.env.REPORTS_FROM_EMAIL || user || "hello@soulesmartbusiness.com"
    const to = process.env.CONTACT_TO_EMAIL || "hello@soulesmartbusiness.com"

    if (!host || !user || !pass) {
      return Response.json(
        { error: "Der Mailserver ist noch nicht vollständig konfiguriert." },
        { status: 500 },
      )
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

    await transporter.verify()

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
  } catch (error) {
    console.error("Contact form mail error:", error)

    return Response.json(
      {
        error:
          "Die Anfrage konnte gerade nicht per E-Mail versendet werden. Bitte prüfen Sie die SMTP-Konfiguration.",
      },
      { status: 500 },
    )
  }
}
