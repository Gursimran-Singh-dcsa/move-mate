"use client";

import { useRef, useState } from "react";
import ServicesComponent from "./serviceComponent";
import { Metadata } from "next";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Moving & Relocation Services",
  description:
    "Explore professional house, office, warehouse, intercity, single item and furniture relocation services from Move Mate Relocations NZ.",

  openGraph: {
    title: "Moving & Relocation Services | Move Mate NZ",
    description:
      "Professional moving solutions for homes, offices, warehouses, intercity moves, single items and furniture across New Zealand.",
    images: [
      {
        url: `${bp}/full_logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Move Mate Relocations NZ Services",
      },
    ],
  },
};

export const items = [
  {
    imagePath: `${bp}/house_relocation.jpeg`,
    imageAlt: "House Relocation",
    title: "House Relocation",
    hashtags: ["#house", "#relocation", "#moving"],
    description:
      "Moving to a new home? Our team carefully handles your household belongings from packing and loading through to safe delivery.",
  },
  {
    imagePath: `${bp}/office_relocation.jpeg`,
    imageAlt: "Office Relocation",
    title: "Office Relocation",
    hashtags: ["#office", "#relocation", "#moving"],
    description:
      "Keep your business move organised with our office relocation service, covering desks, equipment, furniture and other workplace essentials.",
  },
  {
    imagePath: `${bp}/warehouse_relocation.jpeg`,
    imageAlt: "Warehouse Relocation",
    title: "Warehouse Relocation",
    hashtags: ["#warehouse", "#relocation", "#moving"],
    description:
      "Relocating a warehouse requires careful planning. We transport stock, equipment and other warehouse contents safely and efficiently.",
  },
  {
    imagePath: `${bp}/intercity_relocation.jpeg`,
    imageAlt: "Intercity Relocation",
    title: "Intercity Relocation",
    hashtags: ["#intercity", "#relocation", "#moving"],
    description:
      "Planning a move between cities? We coordinate long-distance transportation to get your belongings to their new destination safely and on time.",
  },
  {
    imagePath: `${bp}/single_item_movers.jpeg`,
    imageAlt: "Single Item Movers",
    title: "Single Item Movers",
    hashtags: ["#single", "#item", "#moving", "#movers"],
    description:
      "Only need one item moved? We handle large, heavy or valuable pieces with careful loading, secure transportation and reliable delivery.",
  },
  {
    imagePath: `${bp}/furniture_removalists.jpeg`,
    imageAlt: "Furniture Removalists",
    title: "Furniture Removalists",
    hashtags: ["#furniture", "#removalists", "#moving"],
    description:
      "From bulky furniture to individual pieces, our removalists provide careful handling and dependable transportation to your chosen destination.",
  },
];

export const Services = () => {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollTo = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setCurrent(index);
  };

  const prev = () => scrollTo(Math.max(current - 1, 0));
  const next = () => scrollTo(Math.min(current + 1, items.length - 1));

  const onScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const center = container.scrollLeft + container.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setCurrent(closest);
  };

  return (
    <div
      id="services"
      className="max-w-8xl mx-auto flex flex-col items-center justify-center gap-6 py-8 bg-midnight-blue text-white"
    >
      <div className="text-3xl font-bold underline">What We Move</div>
      <div className="max-w-3xl text-center">
        Our Packers and Movers division provides reliable, efficient, and
        hassle-free relocation solutions. We handle every move with care and
        professionalism, ensuring your belongings reach their destination safely
        and on time.
      </div>

      {/* Mobile carousel */}
      <div className="relative w-full md:hidden scrollbar-hide">
        {/* Native-scrollable track with snap */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide items-stretch gap-4 px-10 pb-8"
        >
          {items.map((item, i) => (
            <div
              key={item.imageAlt}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="w-full shrink-0 snap-center"
            >
              <ServicesComponent {...item} />
            </div>
          ))}
        </div>

        {/* Prev — overlaid left */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white text-xl backdrop-blur-sm transition hover:bg-black/60 disabled:opacity-30"
          disabled={current === 0}
        >
          ‹
        </button>

        {/* Next — overlaid right */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-1 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white text-xl backdrop-blur-sm transition hover:bg-black/60 disabled:opacity-30"
          disabled={current === items.length - 1}
        >
          ›
        </button>

        {/* Dots — overlaid at bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.imageAlt}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-primary" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden w-full gap-6 p-6 md:grid md:grid-cols-3">
        {items.map((item) => (
          <ServicesComponent key={item.imageAlt} {...item} />
        ))}
      </div>
    </div>
  );
};
