/**
 * Per-letter rolling text. Two identical copies stacked; on hover of the
 * enclosing `.roll-host` the top copy lifts away and the bottom one rises
 * into place, each letter delayed a little after the one before it.
 */
export default function RollingText({ children }: { children: string }) {
  const chars = [...children];

  const line = (cls: string) => (
    <span className={cls} aria-hidden="true">
      {chars.map((c, i) => (
        <span key={i} data-ch style={{ "--i": i } as React.CSSProperties}>
          {c === " " ? " " : c}
        </span>
      ))}
    </span>
  );

  return (
    <span className="rolling">
      <span className="sr-only">{children}</span>
      {line("rolling-a")}
      {line("rolling-b")}
    </span>
  );
}
