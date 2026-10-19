import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://pathrise.io";

// Anchor sections on the single-page site — these are the canonical URLs
// we want Google to index. Update if you add new routes.
const SECTIONS = [
  "",
  "#pathways",
  "#tools",
  "#how",
  "#pricing",
  "#resources",
  "#faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return SECTIONS.map((section) => ({
    url: `${SITE_URL}/${section}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: section === "" ? 1 : 0.7,
  }));
}
