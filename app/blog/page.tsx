import type { Metadata } from "next";
import { BlogCard } from "@/shared/components/blogCard";
import { seoBlogs } from "@/utils/seoBlogs";

export const metadata: Metadata = {
  title: "Moving Blog and Location Guides",
  description:
    "Explore moving guides from Move Mate Relocations, including Hamilton, Tauranga, Huntly, and Auckland furniture mover insights.",
};

export default function BlogIndexPage() {
  return (
    <main className="bg-gray-50">
      <section className="relative overflow-hidden bg-midnight-blue px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            <span className="rounded-full bg-white px-3 py-1">Blog</span>
          </p>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Moving insights by location
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Browse local moving guides and practical relocation tips across New
            Zealand. Each article covers planning, packing, and transport
            details to help make your move easier.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {seoBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} variant="full" />
          ))}
        </div>
      </section>
    </main>
  );
}
