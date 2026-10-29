/**
 * Single source of truth for all invitation content.
 * Edit this file to update names, date, venue, or family details.
 */
export const wedding = {
  initials: "S & M",
  brideLabel: "BRIDE NAME:",
  bride: "Shamiya Hossain Shin",
  groomLabel: "GROOM NAME:",
  groom: "Moniruzzaman Rabbi",
  event: {
    dateLabel: "Friday, 11 December 2026",
    weekday: "Friday",
    day: "11",
    month: "December",
    year: "2026",
    timeLabel: "12:30 PM – 3:30 PM",
    venue: "Amana Food Ville, SKS Tower, Mohakhali",
    mapsUrl: "https://maps.app.goo.gl/h1nJqr7ijbSA9yDH7",
  },
  groomFamily: {
    title: "The Groom’s Family",
    father: "Md. Selim",
    mother: "Shahanaz Parvin Jorna",
  },
  brideFamily: {
    title: "The Bride’s Family",
    father: "Late Md Monir Hossain",
    mother: "Mrs. Monira Begum",
  },
  copy: {
    coverPhrase: "Two hearts, one beautiful beginning.",
    coverHint: "A wedding invitation awaits you.",
    blessingLine:
      "With the blessing of Allah, we joyfully invite you to celebrate our wedding.",
    inviteLine:
      "Together with their families, we joyfully invite you to celebrate the wedding of",
    presenceLine: "Your presence will make our special day even more meaningful.",
    closingLine: "With love and gratitude, we look forward to celebrating with you.",
  },
  site: {
    title: "S & M — Wedding Invitation",
    description:
      "You are warmly invited to the wedding of Shamiya Hossain Shin and Moniruzzaman Rabbi on Friday, 11 December 2026.",
  },
} as const;

export type Wedding = typeof wedding;
