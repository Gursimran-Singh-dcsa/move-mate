import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seoBlogBySlug, seoBlogs } from "@/utils/seoBlogs";

export function generateStaticParams() {
  return seoBlogs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const blog = seoBlogBySlug.get(slug);

  if (!blog) {
    return {
      title: "Blog",
      description: "Moving guides from Move Mate Relocations.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: [
      blog.keyword,
      `${blog.city} moving company`,
      `${blog.city} relocation services`,
      "Move Mate Relocations NZ",
    ],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      locale: "en_NZ",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

export default async function SeoBlogDetailPage(
  props: PageProps<"/blog/[slug]">,
) {
  const { slug } = await props.params;
  const blog = seoBlogBySlug.get(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = seoBlogs.filter((item) => item.slug !== blog.slug);

  return (
    <main className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <article className="mx-auto max-w-4xl">
        <Link href="/blog" className="text-sm font-semibold text-primary">
          ← Back to blog
        </Link>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {blog.keyword}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {blog.title}
        </h1>
        <p className="mt-4 text-base leading-8 text-gray-700">
          {blog.description}
        </p>
        <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
          {blog.intro}
        </p>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight">
            {blog.planningTitle}
          </h2>
          <ul className="mt-4 space-y-3">
            {blog.planningPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 text-primary">•</span>
                <span className="text-sm leading-7 text-gray-700 sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-white"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-primary px-5 py-2.5 text-sm font-bold text-primary"
            >
              View Services
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight">
            {blog.checklistTitle}
          </h2>
          <ul className="mt-4 space-y-3">
            {blog.checklistItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-primary">✓</span>
                <span className="text-sm leading-7 text-gray-700 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight">FAQ</h2>
          <div className="mt-5 space-y-5">
            {blog.faq.map((entry) => (
              <div key={entry.question}>
                <h3 className="text-lg font-bold text-gray-900">
                  {entry.question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-700 sm:text-base">
                  {entry.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Related location guides
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedBlogs.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-xl border border-gray-200 p-4 transition hover:border-primary"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.keyword}
                </p>
                <p className="mt-2 text-base font-bold text-gray-900">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
