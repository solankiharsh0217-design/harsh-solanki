"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import RollingText from "./RollingText";

const QUICK_LINKS = [
  { label: "Home", href: "/#hero-section" },
  { label: "About Me", href: "/#bio-section" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/work" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#111111", padding: "120px 0 300px" }}
    >
      <div className="container relative z-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 lg:items-end lg:justify-between">
            {/* Tagline */}
            <h2
              className="t-h3 w-full lg:max-w-[340px] min-w-0"
              style={{ color: "#faf7f3" }}
            >
              Production web apps and AI agents.
            </h2>

            {/* Columns */}
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-0 justify-between w-full lg:w-[720px]">
              <div className="flex flex-col gap-5 sm:w-[300px]">
                <span className="t-column" style={{ color: "#faf7f3" }}>
                  /Quick links
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {QUICK_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="roll-host t-btn rounded-lg"
                      style={{
                        backgroundColor: "#faf7f3",
                        color: "#111111",
                        padding: "8px 16px",
                      }}
                    >
                      <RollingText>{l.label}</RollingText>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:w-[300px]">
                <span className="t-column" style={{ color: "#faf7f3" }}>
                  /Contact
                </span>
                <a
                  href="mailto:solankiharsh0217@gmail.com"
                  className="t-body self-start hover:underline underline-offset-4"
                  style={{ color: "#faf7f3" }}
                >
                  solankiharsh0217@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Oversized wordmark, cropped by the foot of the page */}
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-[-100px] text-center select-none pointer-events-none whitespace-nowrap"
        style={{
          color: "rgba(250, 247, 243, 0.1)",
          fontSize: "clamp(96px, 23.2vw, 334px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 0.9,
        }}
      >
        HARSH
      </span>
    </footer>
  );
}
