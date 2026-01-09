// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Site } from "./types";

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const SITE: Site = {
  title: "Marcelo Vizcarra",
  description: "Personal blog of Marcelo Vizcarra",
  href: "https://marcelovizcarra.com",
  author: "Marcelo Vizcarra",
  locale: "en-US",
  featuredPostCount: 3,
  postsPerPage: 6,
};

export const NAV_LINKS = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
] as const;
