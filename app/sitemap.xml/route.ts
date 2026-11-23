import { sitemapIndex, xmlResponse } from "@/utils/sitemap";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(sitemapIndex(["/sitemap-pages.xml", "/sitemap-blog.xml"]));
}
