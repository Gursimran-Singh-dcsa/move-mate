import { blogPath, seoBlogs } from "@/utils/seoBlogs";
import { urlset, xmlResponse, type SitemapEntry } from "@/utils/sitemap";

export const dynamic = "force-static";

export function GET() {
  const entries: SitemapEntry[] = [
    { path: "/blog/", priority: 0.8, changefreq: "weekly" },
    ...seoBlogs.map((b) => ({
      path: blogPath(b.slug),
      priority: 0.7,
      changefreq: "monthly" as const,
    })),
  ];
  return xmlResponse(urlset(entries));
}
