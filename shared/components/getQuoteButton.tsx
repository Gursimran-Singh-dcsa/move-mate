import { PrimaryButton } from "./button";

export const GetQuoteButton = () => {
  return (
    <PrimaryButton isLink linkTo="/contact">
      <span className="flex items-center gap-2">
        Get A Quote{" "}
        <span className="p-[0.5px] rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="var(--color-primary)"
            stroke="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-big-right-icon lucide-arrow-big-right"
          >
            <path d="M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z" />
          </svg>
        </span>
      </span>
    </PrimaryButton>
  );
};
