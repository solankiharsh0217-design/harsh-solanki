"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

interface Tag {
  label: string;
  /** Official brand mark in public/logos. Concept tags have none. */
  icon?: string;
}

const SERVICES: { title: string; tags: Tag[] }[] = [
  {
    title: "Web Applications",
    tags: [
      { label: "Next.js", icon: "/logos/nextdotjs.svg" },
      { label: "TypeScript", icon: "/logos/typescript.svg" },
      { label: "Tailwind CSS", icon: "/logos/tailwindcss.svg" },
    ],
  },
  {
    title: "AI Agents & RAG",
    tags: [{ label: "Agent Orchestration" }, { label: "RAG Pipelines" }, { label: "Tool Calling" }],
  },
  {
    title: "Backend & Edge",
    tags: [
      { label: "Hono", icon: "/logos/hono.svg" },
      { label: "Cloudflare Workers", icon: "/logos/cloudflare.svg" },
      { label: "PostgreSQL", icon: "/logos/postgresql.svg" },
    ],
  },
  {
    title: "Frontend Engineering",
    tags: [
      { label: "React", icon: "/logos/react.svg" },
      { label: "Framer Motion", icon: "/logos/framer.svg" },
      { label: "GSAP", icon: "/logos/gsap.svg" },
    ],
  },
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
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 px-6 sm:px-10 py-6 sm:py-0 sm:h-[120px]"
                style={{
                  backgroundColor: "#faf7f3",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="t-card">{s.title}</h3>

                <div className="flex items-center gap-2.5 flex-wrap sm:justify-end">
                  {s.tags.map((tag, i) => (
                    <span key={tag.label} className="inline-flex items-center gap-2.5">
                      {i > 0 && (
                        <span
                          aria-hidden="true"
                          className="rounded-full shrink-0"
                          style={{ width: 4, height: 4, backgroundColor: "#111111" }}
                        />
                      )}
                      {tag.icon && (
                        <Image
                          src={tag.icon}
                          alt=""
                          width={15}
                          height={15}
                          className="shrink-0 opacity-60"
                        />
                      )}
                      <span className="t-body" style={{ color: "rgba(17, 17, 17, 0.5)" }}>
                        {tag.label}
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
