import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer needs Node's networking APIs, so pin the Node runtime
// (never the Edge runtime) for this route.
export const runtime = "nodejs";

/**
 * Receives the contact form and delivers it to your inbox.
 *
 * Delivery, in order of preference:
 * 1. Gmail SMTP — set GMAIL_USER + GMAIL_APP_PASSWORD (a Google "app
 *    password", which requires 2-Step Verification on the account). Mail
 *    goes to CONTACT_TO_EMAIL, or to GMAIL_USER itself when unset, with
 *    the visitor's address as Reply-To.
 * 2. CONTACT_WEBHOOK_URL — forwards the JSON to your inbox tool of choice
 *    (Formspree, Resend, a Slack webhook, …).
 * 3. Neither — the submission is only logged server-side.
 */
export async function POST(request: Request) {
  let body: { name?: string; email?: string; project?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected JSON." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const project = body.project?.trim() ?? "";

  if (!name || !email || !project) {
    return NextResponse.json(
      { error: "Name, email and project are all required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });
      await transporter.sendMail({
        from: `"Portfolio Contact" <${gmailUser}>`,
        to: process.env.CONTACT_TO_EMAIL || gmailUser,
        replyTo: email,
        subject: `New project inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nProject details:\n${project}`,
      });
    } catch (err) {
      console.error("[contact] gmail delivery failed", err);
      return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
    }
  } else if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, project }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
    }
  } else {
    console.info("[contact] submission received", { name, email });
  }

  return NextResponse.json({ ok: true });
}
