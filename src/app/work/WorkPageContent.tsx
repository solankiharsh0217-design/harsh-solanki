"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import { PROJECTS } from "@/lib/projects";

export default function WorkPageContent() {
  return (
    <>
      <main className="sections">
        <section id="hero-section" className="w-full pt-[180px]">
          <div className="container stack-60">
            <Reveal>
              <h1 className="t-h2">Work</h1>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.map((p) => (
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
                      <h2 className="t-card">{p.title}</h2>
                      <p className="t-small">{p.category}</p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <TextLink href="/" label="Back Home" />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
