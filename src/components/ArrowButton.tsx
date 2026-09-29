/**
 * The 28px arrow square used beside every text link on the original.
 * Two arrows sit stacked: on hover of the enclosing `.roll-host` the first
 * slides out top-right while the second slides in from bottom-left, and a
 * filled circle wipes out from the centre behind them.
 *
 * `tone` picks the palette — "dark" on the cream page, "light" inside the
 * black cards.
 */
export default function ArrowButton({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const vars =
    tone === "dark"
      ? { "--arrow-line": "#111111", "--arrow-fill": "#faf7f3" }
      : { "--arrow-line": "#faf7f3", "--arrow-fill": "#111111" };

  const glyph = (cls: string) => (
    <svg className={cls} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );

  return (
    <span className="arrow-btn" style={vars as React.CSSProperties}>
      <span className="arrow-bg" />
      {glyph("a1")}
      {glyph("a2")}
    </span>
  );
}
