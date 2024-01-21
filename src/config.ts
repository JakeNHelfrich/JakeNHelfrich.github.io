import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://JakeNHelfrich.github.io",
  author: "Jake Helfrich",
  desc: "A place where I like to blog about interesting things.",
  title: "Jake's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
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
    name: "Github",
    href: "https://github.com/JakeNHelfrich",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
