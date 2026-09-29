"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const WORDS =
  "From prototype to production. Web applications and AI systems built to run reliably at the edge, scale without drama, and stay clear enough for the next engineer to extend.".split(
    " "
  );

/** Where in the section's scroll range the reveal starts, and how long it runs. */
const REVEAL_FROM = 0.2;
const REVEAL_SPAN = 0.62;

/**
 * One word of the quote. Each fades from the faint resting colour to full
 * black across its own slice of the section's scroll range, so the sentence
 * reads itself in as you scroll past.
 */
function Word({
  word,
  index,
  progress,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
}) {
  // The reveal doesn't span the whole sticky range — it runs across the
  // middle of it, matching the original's timing.
  const start = REVEAL_FROM + REVEAL_SPAN * (index / WORDS.length);
  const end = REVEAL_FROM + REVEAL_SPAN * ((index + 1.4) / WORDS.length);
  const color = useTransform(
    progress,
    [start, end],
    ["rgba(0, 0, 0, 0.1)", "rgb(17, 17, 17)"]
  );

  return (
    <motion.span style={{ color }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}

export default function Quote() {
  const ref = useRef<HTMLElement>(null);

  // The section is taller than the sticky panel inside it; that difference is
  // the scrub range for the word-by-word reveal.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative w-full h-[1350px]">
      <div className="sticky top-0 h-svh lg:h-[900px] flex items-center">
        <div className="container">
          <p className="t-quote mx-auto max-w-[830px] text-center">
            {WORDS.map((w, i) => (
              <Word key={i} word={w} index={i} progress={scrollYProgress} />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
