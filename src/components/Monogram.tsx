import { wedding } from "@/config/wedding";

/**
 * "S & M" emblem (text comes from src/config/wedding.ts). The text is sized with container-query units relative to the
 * circle itself, so it always stays centred and inside the ring at any width.
 * Set the circle's size from the parent (width), the lettering follows.
 */
export function Monogram({
  className = "",
  initials = wedding.initials,
}: {
  className?: string;
  initials?: string;
}) {
  const [first, , last] = initials.split(" ");
  return (
    <span className={`monogram ${className}`} role="img" aria-label={`${first} and ${last}`}>
      <span className="monogram__text" aria-hidden="true">
        <span>{first}</span>
        <span className="monogram__amp">&amp;</span>
        <span>{last}</span>
      </span>
    </span>
  );
}
