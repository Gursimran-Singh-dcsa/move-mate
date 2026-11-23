import Image from "next/image";
import Link from "next/link";
import type { SeoBlog } from "@/utils/seoBlogs";
import { ShareButtons } from "@/shared/components/shareButtons";

type BlogCardProps = {
  blog: SeoBlog;
  /** "compact" shows keyword + CTA only (homepage); "full" adds description and share icons. */
  variant?: "compact" | "full";
  headingLevel?: "h2" | "h3";
};

/**
 * Whole card is clickable via a stretched link (::after covers the card).
 * Share icons sit above it (relative z-10) so they stay independently clickable.
 * Server component — no client JS.
 */
export function BlogCard({
  blog,
  variant = "full",
  headingLevel = "h2",
}: BlogCardProps) {
  const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const Heading = headingLevel;
  const full = variant === "full";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary">
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={`${bp}${blog.image}`}
          alt={blog.imageAlt}
          fill
          unoptimized
          sizes="(min-width: 1024px) 25vw, (min-width: 574px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: blog.imagePosition ?? "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
          {blog.city}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Heading
          className={`font-extrabold tracking-tight text-gray-900 transition-colors group-hover:text-primary ${
            full ? "text-xl" : "text-lg"
          }`}
        >
          <Link
            href={`/blog/${blog.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
          >
            {full ? blog.title : blog.keyword}
          </Link>
        </Heading>

        {full && (
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
            {blog.description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
            Read article
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>

        {full && (
          <div className="relative z-10 mt-4 border-t border-gray-100 pt-4">
            <ShareButtons slug={blog.slug} title={blog.title} />
          </div>
        )}
      </div>
    </article>
  );
}
