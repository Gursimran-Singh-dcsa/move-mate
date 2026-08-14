import CountUp from './countUp';
export const Statistics = () => {
  return (
    <div className="flex mt-5 flex-col items-center justify-center gap-6 py-8 max-w-8xl">
      <h2 className="text-3xl font-bold">
        We make moving simple, reliable and stress-free
      </h2>

      <p className="text-center max-w-3xl">
        Our experienced moving teams are committed to providing a smooth and
        hassle-free experience from start to finish. We’re reliable, punctual,
        and careful with your belongings, ensuring your move is handled with the
        highest level of care. Get in touch today for a personalized intercity
        moving quote.
      </p>

      <div className="flex gap-6 justify-evenly w-full mt-3 flex-wrap">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-primary">
            <CountUp end={100} />
          </span>
          <span>Projects Completed</span>
        </div>

        <div className="w-[2px] bg-primary hidden lg:block" />

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-primary">
            <CountUp end={50} />
          </span>
          <span>Happy Clients</span>
        </div>

        <div className="w-[2px] bg-primary hidden lg:block" />

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-primary">
            <CountUp end={10} />
          </span>
          <span>Years of Experience</span>
        </div>

        <div className="w-[2px] bg-primary hidden lg:block" />

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-primary">
            <CountUp end={25} />
          </span>
          <span>Cities Covered</span>
        </div>

        <div className="w-[2px] bg-primary hidden lg:block" />

        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-primary">
            <CountUp end={50} />
          </span>
          <span>Professional Staff</span>
        </div>
      </div>
    </div>
  );
};
