import Link from "next/link";
import ArrowButton from "./ArrowButton";
import RollingText from "./RollingText";

/** Label + arrow square, the pairing used for every call to action. */
export default function TextLink({
  href,
  label,
  tone = "dark",
  external = false,
}: {
  href: string;
  label: string;
  tone?: "dark" | "light";
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="t-body">
        <RollingText>{label}</RollingText>
      </span>
      <ArrowButton tone={tone} />
    </>
  );

  const className = "roll-host inline-flex items-center gap-2.5";
  const style = { color: tone === "dark" ? "#111111" : "#faf7f3" };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style}>
      {inner}
    </Link>
  );
}
