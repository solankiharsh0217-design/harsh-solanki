import { NextResponse } from "next/server";

/**
 * Receives the contact form.
 *
 * Set CONTACT_WEBHOOK_URL to forward submissions to your inbox tool of choice
 * (Formspree, Resend, a Slack webhook, …). Without it the submission is only
 * logged server-side, so wire that up before going live.
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

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
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
