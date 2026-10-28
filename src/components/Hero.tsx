import Image from "next/image";
import { wedding } from "@/config/wedding";
import { Monogram } from "./Monogram";
import { Botanical, Flourish } from "./Ornaments";

export function Hero() {
  return (
    <header className="hero">
      <Botanical className="hero__bot hero__bot--tl" />
      <Botanical className="hero__bot hero__bot--br" />

      <div className="hero__inner">
        <Monogram className="monogram--hero" />
        <figure className="hero__card">
          <Image
            className="hero__card-img"
            src="/images/couple-card.jpg"
            alt="Decorative wedding card illustration of a bride and groom holding hands, with the Bismillah calligraphy"
            width={1131}
            height={1532}
            unoptimized
            priority
          />
          <figcaption className="hero__blessing">{wedding.copy.blessingLine}</figcaption>
        </figure>
        <p className="hero__invite">{wedding.copy.inviteLine}</p>

        <h1 className="hero__names">
          <span className="hero__person">
            <span className="hero__label">{wedding.brideLabel}</span>
            <span className="hero__name">{wedding.bride}</span>
          </span>
          <span className="hero__person">
            <span className="hero__label">{wedding.groomLabel}</span>
            <span className="hero__name">{wedding.groom}</span>
          </span>
        </h1>

        <Flourish className="hero__flourish" />

        <p className="hero__date">
          <time dateTime="2026-12-11">{wedding.event.dateLabel}</time>
        </p>
        <p className="hero__time">{wedding.event.timeLabel}</p>

        <p className="hero__presence">{wedding.copy.presenceLine}</p>
      </div>
    </header>
  );
}
