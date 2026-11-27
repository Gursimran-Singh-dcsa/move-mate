import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS, AREAS_SERVED, jsonLdString } from "@/utils/business";
import {
  serviceBySlug,
  serviceDetails,
  servicePath,
} from "@/utils/serviceDetails";
import { SITE_URL } from "@/utils/seoBlogs";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = serviceBySlug.get(slug);
  if (!service) return { title: "Services" };

  return {
    title: service.seoTitle,
    description: service.description,
    openGraph: {
      title: `${service.seoTitle} | Move Mate Relocations NZ`,
      description: service.description,
      locale: "en_NZ",
      images: [`${bp}${service.image}`],
    },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = serviceBySlug.get(slug);
  if (!service) notFound();

  const pageUrl = `${SITE_URL}${bp}${servicePath(service.slug)}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      description: service.description,
      url: pageUrl,
      image: `${SITE_URL}${bp}${service.image}`,
      provider: { "@id": `${BUSINESS.url}#business` },
      areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}${bp}/services/`,
        },
        { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
      ],
    },
  ];

  const others = serviceDetails.filter((s) => s.slug !== service.slug);

  return (
    <main className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
      />
      <article className="mx-auto max-w-4xl">
        <Link href="/services" className="text-sm font-semibold text-primary">
          ← All services
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Move Mate Relocations NZ
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {service.seoTitle}
        </h1>
        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={`${bp}${service.image}`}
            alt={service.imageAlt}
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-6 text-base leading-8 text-gray-700">{service.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/get-a-quote"
            className="rounded bg-primary px-6 py-3 text-sm font-bold text-white hover:opacity-90"
          >
            Get a free quote
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="rounded border-2 border-primary px-6 py-3 text-sm font-bold text-primary"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-extrabold">What&apos;s included</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-gray-700">
            {service.included.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-extrabold">Who it&apos;s for</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-gray-700">
            {service.idealFor.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-extrabold">How it works</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-gray-700">
            {service.howItWorks.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-extrabold">Areas we serve</h2>
          <p className="mt-4 leading-7 text-gray-700">
            Based in Te Kauwhata, Waikato, we serve Huntly, Hamilton, Mokau,
            Auckland, Tauranga and the wider Waikato and Bay of Plenty, with
            intercity moves across New Zealand. Open daily 8am – 8pm.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-extrabold">Frequently asked questions</h2>
          <div className="mt-4 space-y-5">
            {service.faq.map((f) => (
              <div key={f.question}>
                <h3 className="font-bold">{f.question}</h3>
                <p className="mt-1 leading-7 text-gray-700">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-gray-100 pt-8">
          <h2 className="text-xl font-extrabold">Other services</h2>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={servicePath(s.slug)}
                  className="rounded-full bg-primary/10 px-4 py-2 text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
