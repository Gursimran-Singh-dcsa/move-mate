import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/seoBlogs";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = `${SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`;

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: SITE_URL,
  };
}
