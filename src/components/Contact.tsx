"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import RollingText from "./RollingText";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/solankiharsh0217-design",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-solanki-77b36a343/",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
];

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Enter your name" },
  { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
] as const;

const FIELD_STYLE = {
  borderRadius: 12,
  border: "1px solid rgba(250, 247, 243, 0.15)",
  padding: "0 12px",
  color: "#faf7f3",
} as const;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
      setForm({ name: "", email: "", project: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="w-full section-pt pb-[120px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: heading, blurb, socials */}
          <Reveal className="w-full lg:w-[640px] min-w-0">
            <div className="flex flex-col justify-between h-full gap-16 lg:min-h-[455px]">
              <div className="flex flex-col gap-2.5">
                <h2 className="t-h2">Let&rsquo;s talk.</h2>
                <p className="t-body max-w-[560px]">
                  Have a project or need help? Fill out the form, and we&apos;ll
                  get back to you soon.
                </p>
              </div>

              <div className="flex items-center gap-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group flex items-center justify-center rounded-lg transition-colors duration-300 hover:bg-[#111]"
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-[#111] transition-colors duration-300 group-hover:fill-[#faf7f3]"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: dark form panel */}
          <Reveal delay={0.12} className="w-full lg:w-[500px] min-w-0">
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-2xl flex flex-col gap-5"
              style={{ backgroundColor: "#111111", padding: 16 }}
            >
              {FIELDS.map((f) => (
                <div key={f.name} className="flex flex-col gap-[9px]">
                  <label htmlFor={f.name} className="t-small" style={{ color: "#faf7f3" }}>
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                    className="t-small w-full h-11 bg-transparent outline-none placeholder:text-[rgba(250,247,243,0.4)] focus:border-[rgba(250,247,243,0.45)] transition-colors"
                    style={FIELD_STYLE}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-[9px]">
                <label htmlFor="project" className="t-small" style={{ color: "#faf7f3" }}>
                  Your Project
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={5}
                  placeholder="Tell us about your project"
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className="t-small w-full h-[140px] bg-transparent outline-none resize-none placeholder:text-[rgba(250,247,243,0.4)] focus:border-[rgba(250,247,243,0.45)] transition-colors"
                  style={{ ...FIELD_STYLE, padding: 12 }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="roll-host t-btn w-full h-11 rounded-lg flex items-center justify-center disabled:opacity-60"
                style={{ backgroundColor: "#faf7f3", color: "#111111" }}
              >
                <RollingText>
                  {status === "sending" ? "Sending" : status === "sent" ? "Sent" : "Submit"}
                </RollingText>
              </button>

              {status === "error" && (
                <p className="t-small" style={{ color: "#faf7f3" }} role="alert">
                  That didn&apos;t send. Email{" "}
                  <a className="underline" href="mailto:solankiharsh0217@gmail.com">
                    solankiharsh0217@gmail.com
                  </a>{" "}
                  instead.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
