import { GetACallback } from "@/shared/components/getACallback";
import { Services } from "@/shared/components/services";
import { Statistics } from "@/shared/components/statistics";
import StepsAndQuote from "@/shared/components/StepsAndQuote";
import { WinzQuoteSection } from "@/shared/components/winzquote";
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
            <h1 className="text-4xl font-bold sm:text-6xl lg:text-8xl">
              Moving made
            </h1>
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
      <GetACallback />
      <StepsAndQuote />
    </div>
  );
}
