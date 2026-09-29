"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import TextLink from "./TextLink";
import { FEATURED_PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="w-full section-pt">
      <div className="container stack-60">
        <Reveal>
          <div className="flex items-end justify-between gap-8">
            <h2 className="t-h2 max-w-[8ch]">Featured Projects</h2>
            <div className="hidden sm:block shrink-0">
              <TextLink href="/work" label="View All Work" />
            </div>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURED_PROJECTS.map((p) => (
            <StaggerItem key={p.id}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="zoom-host flex flex-col gap-2.5 w-full"
              >
                <div
                  className="relative w-full overflow-hidden rounded-[20px]"
                  style={{ aspectRatio: "582 / 401" }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 582px"
                    className="object-cover zoom-img"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="t-card">{p.title}</h3>
                  <p className="t-small">{p.category}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="sm:hidden -mt-10">
          <TextLink href="/work" label="View All Work" />
        </div>
      </div>
    </section>
  );
}
