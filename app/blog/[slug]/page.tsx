import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/shared/components/blogCard";
import { BlogContactCta } from "@/shared/components/blogContactCta";
import { ShareButtons } from "@/shared/components/shareButtons";
import { notFound } from "next/navigation";
import { SITE_URL, blogPath, seoBlogBySlug, seoBlogs } from "@/utils/seoBlogs";

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
    keywords: Array.from(
      new Set([
        blog.keyword,
        ...(blog.keywords ?? []),
        `${blog.city} moving company`,
        `${blog.city} relocation services`,
        "Move Mate Relocations NZ",
      ]),
    ),
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      locale: "en_NZ",
      images: [`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${blog.image}`],
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

  const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: [blog.image, ...(blog.gallery?.map((g) => g.src) ?? [])].map(
      (src) => `${SITE_URL}${bp}${src}`,
    ),
    mainEntityOfPage: `${SITE_URL}${bp}${blogPath(blog.slug)}`,
    author: { "@type": "Organization", name: "Move Mate Relocations NZ" },
    publisher: {
      "@type": "Organization",
      name: "Move Mate Relocations NZ",
      telephone: "+64278555700",
      email: "info@movematerelocations.co.nz",
    },
  };

  return (
    <main className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <ShareButtons slug={blog.slug} title={blog.title} className="mt-5" />
        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${blog.image}`}
            alt={blog.imageAlt}
            fill
            unoptimized
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
            style={{ objectPosition: blog.imagePosition ?? "center" }}
          />
        </div>
        <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
          {blog.intro}
        </p>

        {blog.stats && (
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {blog.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-lg font-extrabold text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {blog.sections?.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-extrabold tracking-tight">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        {blog.gallery && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {blog.gallery.map((photo) => (
              <figure key={photo.src}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${photo.src}`}
                    alt={photo.alt}
                    fill
                    unoptimized
                    sizes="(min-width: 896px) 440px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-gray-600">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

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

        <BlogContactCta slug={blog.slug} />

        <section className="mt-10">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Related location guides
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedBlogs.map((item) => (
              <BlogCard
                key={item.slug}
                blog={item}
                variant="compact"
                headingLevel="h3"
              />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
