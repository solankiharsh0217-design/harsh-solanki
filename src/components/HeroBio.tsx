"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import TextLink from "./TextLink";

// Placeholder monogram. Drop a 800×912 photo at public/portrait.jpg to
// replace it — the front face renders grayscale and flips to colour on scroll.
const PORTRAIT = "/portrait.jpg";
const STAR = "/shape-star.png";
const BOLT = "/shape-bolt.png";

export default function HeroBio() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 0 at the top of the hero, 1 once the bio section is fully in view.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  // The portrait starts as a small card resting at the foot of the hero and
  // grows into a full 400×456 panel while flipping from grayscale to colour.
  const scale = useTransform(p, [0, 1], [0.5, 1]);
  // 25% of the panel's own height, so the resting offset scales with the card
  const lift = useTransform(p, [0, 1], [25, 0]);
  const frontSpin = useTransform(p, [0, 1], [0, 180]);
  const backSpin = useTransform(p, [0, 1], [-180, 0]);

  const face = ([l, s, r]: number[]) =>
    `translateY(${l}%) scale(${s}) perspective(1200px) rotateY(${r}deg)`;

  const frontTransform = useTransform([lift, scale, frontSpin], face);
  const backTransform = useTransform([lift, scale, backSpin], face);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* ---- Sticky portrait, pinned behind the hero and bio copy ---- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 h-svh flex items-end justify-center pb-[120px] lg:pb-5">
          <div
            className="relative"
            style={{
              width: "min(400px, 92vw)",
              height: "calc(min(400px, 92vw) * 1.14)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-[20px] overflow-hidden"
              style={{ transform: frontTransform, backfaceVisibility: "hidden" }}
            >
              <Image
                src={PORTRAIT}
                alt="Harsh Solanki"
                fill
                priority
                sizes="400px"
                className="object-cover grayscale"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-[20px] overflow-hidden"
              style={{ transform: backTransform, backfaceVisibility: "hidden" }}
            >
              <Image
                src={PORTRAIT}
                alt=""
                fill
                priority
                sizes="400px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---- Hero ---- */}
      <section
        id="hero-section"
        className="relative z-10 h-svh min-h-[600px] lg:h-[900px]"
      >
        <div className="container relative h-full">
          <div className="relative h-full">
            {/* Decorative holographic shapes, anchored to the headline */}
            <div className="absolute pointer-events-none select-none aspect-square w-[52px] lg:w-[11.86%] left-[-6px] lg:left-[-1.36%] top-[34%] lg:top-[233px]">
              <Image src={STAR} alt="" fill className="object-contain" />
            </div>
            <div className="absolute pointer-events-none select-none aspect-square w-[52px] lg:w-[16.78%] right-[4%] lg:right-auto lg:left-[86.19%] top-[45%] lg:top-[508px]">
              <Image src={BOLT} alt="" fill className="object-contain" />
            </div>

            {/* Headline */}
            <h1
              className="t-hero absolute left-0 right-0 text-center top-[38%] lg:top-[293px]"
              style={{ color: "#111111" }}
            >
              <span className="block">FULL STACK</span>
              <span className="block">ENGINEER</span>
            </h1>

            {/* Foot of the hero */}
            <div className="absolute left-0 right-0 bottom-5 flex items-end justify-between gap-4">
              <span className="t-h3 hidden lg:block">©2026</span>
              <span className="t-body whitespace-nowrap">/BAHADURGARH, INDIA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Bio ---- */}
      <section
        id="bio-section"
        className="relative z-10 lg:h-[900px] py-24 lg:py-0"
      >
        <div className="container h-full">
          <div className="flex h-full flex-col lg:flex-row items-start lg:items-end justify-between gap-16 lg:gap-0 lg:pb-5">
            {/* Left column */}
            <div className="flex flex-col gap-16 lg:gap-[260px] w-full lg:w-[300px] lg:max-w-[300px]">
              <h2 className="t-h2">Hey!</h2>
              <p className="t-lead">
                I&rsquo;m Harsh, a full stack engineer based in Bahadurgarh,
                India, currently building a wedding vendor marketplace at Indian
                Photography Club.
              </p>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5 w-full lg:w-[360px] lg:max-w-[360px]">
              <p className="t-body">
                I build production web applications and AI agent systems —
                Next.js and TypeScript on the front, Hono and Cloudflare Workers
                on the edge.
              </p>
              <p className="t-body">
                Recent work spans RAG pipelines, streaming voice agents and
                multi-tenant SaaS. Previously I built AI automation workflows for
                Kameleon Agency in Italy.
              </p>
              <div>
                <TextLink href="/#contact" label="Get in touch" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
