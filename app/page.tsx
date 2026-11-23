import { GetACallback } from "@/shared/components/getACallback";
import { Services } from "@/shared/components/services";
import { Statistics } from "@/shared/components/statistics";
import StepsAndQuote from "@/shared/components/StepsAndQuote";
import { WinzQuoteSection } from "@/shared/components/winzquote";
import Link from "next/link";
import { BlogCard } from "@/shared/components/blogCard";
import { seoBlogs } from "@/utils/seoBlogs";
export default function Home() {
  return (
    <div className="font-roboto  ">
      <div
        className="relative overflow-hidden bg-cover bg-center min-h-[70vh] lg:min-h-screen"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/nz_land.jpeg)`,
        }}
      >
        <WinzQuoteSection />

        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 flex flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:px-16 lg:min-h-screen">
          {/* Heading */}
          <div className="text-white">
            <h2 className="text-4xl font-bold sm:text-6xl lg:text-8xl">
              Moving made
            </h2>
            <h2 className="text-4xl font-bold text-primary sm:text-6xl lg:text-8xl">
              Simple.
            </h2>
            <h2 className="text-4xl font-bold sm:text-6xl lg:text-8xl">
              Stress-free &
            </h2>
            <h2 className="text-4xl font-bold sm:text-6xl lg:text-8xl">
              reliable.
            </h2>
          </div>
          {/* CTAs */}
          <div className="flex flex-col gap-4 lg:flex-grow lg:items-center">
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/get-a-quote`}
              className="hover:scale-105 transition-transform text-center text-xl font-bold px-8 py-3 bg-primary text-white rounded hover:opacity-90 duration-300 w-full sm:w-[300px]"
            >
              Get A Quote
            </a>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/services`}
              className="hover:scale-105 transition-transform text-center text-xl font-bold px-8 py-3 bg-white/10 border border-white/20 text-white rounded hover:bg-white/20 duration-300 w-full sm:w-[300px]"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>{" "}
      <Statistics />
      <Services />
      <section className="bg-gray-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                From the blog
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Local moving guides across New Zealand
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Read location-specific moving articles and planning advice from
                our relocation team.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border-2 border-primary px-6 py-2.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
            >
              Explore all blogs
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seoBlogs.slice(0, 4).map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                variant="compact"
                headingLevel="h3"
              />
            ))}
          </div>
        </div>
      </section>
      <GetACallback />
      <StepsAndQuote />
    </div>
  );
}
