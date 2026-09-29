"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

const SERVICES = [
  { title: "Web Applications", tags: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "AI Agents & RAG", tags: ["Agent Orchestration", "RAG Pipelines", "Tool Calling"] },
  { title: "Backend & Edge", tags: ["Hono", "Cloudflare Workers", "PostgreSQL"] },
  { title: "Frontend Engineering", tags: ["React", "Framer Motion", "GSAP"] },
];

export default function Services() {
  return (
    <section id="services" className="w-full">
      <div className="container stack-60">
        <Reveal>
          <h2 className="t-h2">Services</h2>
        </Reveal>

        <Stagger className="flex flex-col gap-4">
          {SERVICES.map((s) => (
            <StaggerItem key={s.title}>
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 py-6 sm:py-0 sm:h-[120px]"
                style={{
                  backgroundColor: "#faf7f3",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="t-card">{s.title}</h3>

                <div className="flex items-center gap-2.5 flex-wrap sm:justify-end">
                  {s.tags.map((tag, i) => (
                    <span key={tag} className="inline-flex items-center gap-2.5">
                      {i > 0 && (
                        <span
                          aria-hidden="true"
                          className="rounded-full shrink-0"
                          style={{ width: 4, height: 4, backgroundColor: "#111111" }}
                        />
                      )}
                      <span className="t-body" style={{ color: "rgba(17, 17, 17, 0.5)" }}>
                        {tag}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
