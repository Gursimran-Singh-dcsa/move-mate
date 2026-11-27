import type { Metadata } from "next";
import { items } from "@/utils/serviceItems";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Moving & Relocation Services",
  description:
    "Explore professional house, office, warehouse, intercity, single item and furniture relocation services from Move Mate Relocations NZ.",
  openGraph: {
    title: "Moving & Relocation Services | Move Mate NZ",
    description:
      "Professional moving solutions for homes, offices, warehouses, intercity moves, single items and furniture across New Zealand.",
  },
};

const Services = () => {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            What We Do
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Moving &amp; Relocation Services in Waikato, Auckland &amp; Bay of Plenty
          </h1>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Whatever you are moving, our experienced team is here to make the
            process simple, safe and stress-free.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={item.imagePath}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Title */}
                <h2 className="text-xl font-extrabold tracking-tight">
                  <Link href={`/services/${item.slug}/`}>{item.title}</Link>
                </h2>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                {/* CTA */}
                <div className="mt-6 border-t border-gray-100 pt-5">
                  <Link
                    href={`/services/${item.slug}/`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition group-hover:gap-3"
                  >
                    Learn more
                    <span aria-hidden="true" className="text-lg leading-none">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
