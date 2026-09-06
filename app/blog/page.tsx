import type { Metadata } from "next";
import Link from "next/link";
import { seoBlogs } from "@/utils/seoBlogs";

export const metadata: Metadata = {
  title: "Moving Blog and Location Guides",
  description:
    "Explore moving guides from Move Mate Relocations, including Hamilton, Tauranga, Huntly, and Auckland furniture mover insights.",
};

export default function BlogIndexPage() {
  return (
    <main className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Blog
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Moving insights by location
        </h1>
        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
          Browse local moving guides and practical relocation tips across New
          Zealand. Each article covers planning, packing, and transport details
          to help make your move easier.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {seoBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {blog.keyword}
              </p>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight">
                {blog.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {blog.description}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Read guide
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
