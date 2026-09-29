"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import RollingText from "./RollingText";

const LINKS = [
  { label: "About Me", href: "/#bio-section" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const EASE: [number, number, number, number] = [0.44, 0, 0.56, 1];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-[30px] left-1/2 -translate-x-1/2 z-50 w-[320px] max-w-[calc(100vw-40px)]">
      <nav
        className="w-full rounded-[20px] overflow-hidden"
        style={{ backgroundColor: "#111111", padding: "12px 16px" }}
      >
        {/* Logo + toggle */}
        <div className="flex items-center justify-between" style={{ height: 36 }}>
          <Link
            href="/#hero-section"
            onClick={() => setOpen(false)}
            className="t-lead select-none"
            style={{ color: "#faf7f3" }}
          >
            Harsh
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex items-center justify-center gap-[3px] rounded-lg"
            style={{ width: 44, height: 36, backgroundColor: "#faf7f3" }}
          >
            {/* Three dots at rest, a cross once the menu is open */}
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block rounded-full"
                style={{ width: 4, height: 4, backgroundColor: "#111111" }}
                animate={{ opacity: open ? 0 : 1, scale: open ? 0.4 : 1 }}
                transition={{ duration: 0.3, ease: EASE, delay: open ? 0 : 0.12 }}
              />
            ))}

            <motion.svg
              className="absolute"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="#111111"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
              initial={false}
              animate={{
                opacity: open ? 1 : 0,
                rotate: open ? 0 : -90,
                scale: open ? 1 : 0.4,
              }}
              transition={{ duration: 0.35, ease: EASE, delay: open ? 0.1 : 0 }}
            >
              <path d="M2 2 12 12M12 2 2 12" />
            </motion.svg>
          </button>
        </div>

        {/* Links */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-start gap-2.5 pt-5">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE, delay: 0.06 * i }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="roll-host t-btn rounded-lg block"
                      style={{
                        backgroundColor: "#faf7f3",
                        color: "#111111",
                        padding: "8px 16px",
                      }}
                    >
                      <RollingText>{l.label}</RollingText>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
