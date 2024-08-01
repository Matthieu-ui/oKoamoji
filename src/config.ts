import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://oKoamoji.com/", // replace this with your deployed domain
  author: "Matthieu Felker",
  profile: "https://MatthieuFelker.com/",
  desc: "An extensive collection of koamoji, dongers, and emoticons.",
  title: "oKoamoji",
  flavor: "",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
  component: undefined,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://x.com/oKaomoji_npc",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/Matthieu-ui",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
