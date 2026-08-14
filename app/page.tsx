import { GetACallback } from "@/shared/components/getACallback";
import { Services } from "@/shared/components/services";
import { Statistics } from "@/shared/components/statistics";
import StepsAndQuote from "@/shared/components/StepsAndQuote";

export default function Home() {
  return (
    <div className="font-roboto  ">
      <div className=" overflow-hidden bg-[url(/nz_land.jpeg)] bg-cover bg-center relative">
        <div className="  absolute inset-0 w-[100vw] bg-cover bg-[#000] bg-center opacity-70 z-0"></div>
        {/* Content */}
        <div className="flex p-4">
          <div className="relative z-10 p-6 text-white">
            <h2 className="text-8xl font-bold">Moving made</h2>
            <h2 className="text-8xl font-bold text-primary  ">Simple.</h2>
            <h2 className="text-8xl font-bold">Stress-free &</h2>
            <h2 className="text-8xl font-bold">reliable.</h2>
          </div>
          <div className="flex z-10  flex-col justify-center items-center flex-grow gap-[10px]">
            <span className="cursor-pointer w-[300px] text-center mt-8  gap-[10px] text-[2rem] px-2 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary transition-colors duration-300">
              <span>Get A Quote</span>{" "}
            </span>
            <span className="cursor-pointer border border-[rgba(255,255,255, 0.08)] w-[300px] text-center mt-8  gap-[10px] text-[2rem] px-2 bg-[rgba(255,255,255, 0.08)]  text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              <span>Explore Services</span>{" "}
            </span>
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
