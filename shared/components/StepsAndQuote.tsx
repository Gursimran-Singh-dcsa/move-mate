"use client";

import { title } from "node:process";
import { useMemo } from "react";

const Steps = () => {
  const steps = useMemo(
    () => [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-form-icon lucide-form h-full w-[45px]"
          >
            <path d="M4 14h6" />
            <path d="M4 2h10" />
            <rect x="4" y="18" width="16" height="4" rx="1" />
            <rect x="4" y="6" width="16" height="4" rx="1" />
          </svg>
        ),
        title: "Fill out the form",
        description: "Provide us with your details and requirements.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-calendar-days-icon lucide-calendar-days h-full w-[45px]"
          >
            <path d="M8 2v3" />
            <path d="M16 2v3" />
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
            <path d="M8 13h.01" />
            <path d="M12 13h.01" />
            <path d="M16 13h.01" />
            <path d="M8 17h.01" />
            <path d="M12 17h.01" />
            <path d="M16 17h.01" />
          </svg>
        ),
        title: (
          <span className="flex items-center gap-2">
            Book a date with us{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="red"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-heart-icon lucide-heart"
            >
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            </svg>
          </span>
        ),
        description: "Select a date and time that works best for you. ", 
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-package-icon lucide-package h-full w-[45px]"
          >
            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
            <path d="M12 22V12" />
            <polyline points="3.29 7 12 12 20.71 7" />
            <path d="m7.5 4.27 9 5.15" />
          </svg>
        ),
        title: "Pack and Prepare",
        description:
          "Our team will assist you in packing and preparing your belongings for a safe move.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-truck-icon lucide-truck h-full w-[45px]"
          >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
          </svg>
        ),
        title: "We Move Your Packages",
        description:
          "Our professional team will transport your packages safely to your new home.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-heart-handshake-icon lucide-heart-handshake h-full w-[45px]"
          >
            <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
          </svg>
        ),
        title: "We Install Your Belongings",
        description:
          "Our team will help you set up and install your belongings in your new home.",
      },
    ],
    [],
  );
  return (
    <div className="flex flex-col gap-6 w-full p-6 bg-midnight-blue text-white  rounded-l-lg lg:col-span-3 ">
      <h2 className="text-2xl font-bold">Our Process</h2>
      {steps.map((step, index) => (
        <div key={index} className="flex gap-3 items-center">
          {step.icon}
          <div className="flex flex-col gap-2 w-full">
            <h3 className="font-extrabold">{step.title}</h3>
            <p className="text-white">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Quote = () => {
  return (
    <div className="flex flex-col gap-6 w-full p-6 bg-white text-gray-800 rounded-lg h-full border border-primary shadow-md col-span-2">
      <h3 className="text-lg font-semibold">Get a Quote</h3>
      <p>
        Fill out the form and our team will provide you with a personalized
        quote.
      </p>
    </div>
  );
};

const StepsAndQuote = () => {
  return (
    <div className="grid xs:grid-cols-1 lg:grid-cols-5 items-center justify-center max-w-8xl p-8 bg-midnight-blue">
      <Steps />
      <Quote />
    </div>
  );
};

export default StepsAndQuote;
