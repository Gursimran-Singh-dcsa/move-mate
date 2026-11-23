import { SITE_URL } from "@/utils/seoBlogs";

export type SitemapEntry = {
  path: string;
  priority: number;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
};

export const siteBase = () =>
  `${SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`;

export const xmlResponse = (xml: string) =>
  new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });

export function urlset(entries: SitemapEntry[]) {
  const base = siteBase();
  const lastmod = new Date().toISOString();
  const urls = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${base}${e.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function sitemapIndex(files: string[]) {
  const base = siteBase();
  const lastmod = new Date().toISOString();
  const items = files
    .map(
      (f) =>
        `  <sitemap>\n    <loc>${base}${f}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}
