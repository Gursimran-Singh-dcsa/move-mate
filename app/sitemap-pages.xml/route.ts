import { urlset, xmlResponse, type SitemapEntry } from "@/utils/sitemap";

export const dynamic = "force-static";

const pages: SitemapEntry[] = [
  { path: "/", priority: 1, changefreq: "weekly" },
  { path: "/services/", priority: 0.9, changefreq: "monthly" },
  { path: "/get-a-quote/", priority: 0.9, changefreq: "monthly" },
  { path: "/about-us/", priority: 0.7, changefreq: "yearly" },
  { path: "/contact/", priority: 0.7, changefreq: "yearly" },
  { path: "/privacy-policy/", priority: 0.3, changefreq: "yearly" },
  { path: "/terms-and-conditions/", priority: 0.3, changefreq: "yearly" },
];

export function GET() {
  return xmlResponse(urlset(pages));
}
