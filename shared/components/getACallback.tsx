"use client";

import { FormEvent, useMemo, useState } from "react";

export const GetACallback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Today's date in local timezone
  const today = useMemo(() => {
    const date = new Date();
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - offset * 60 * 1000);

    return localDate.toISOString().split("T")[0];
  }, []);

  const validatePhone = (phone: string) => {
    const cleanedPhone = phone.replace(/[\s()-]/g, "");

    // NZ mobile numbers:
    // 0212345678
    // 0221234567
    // +64212345678
    // +64221234567
    return /^(?:02\d{7,9}|\+642\d{7,9})$/.test(cleanedPhone);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const date = formData.get("date")?.toString() || "";
    const timeSlot = formData.get("timeSlot")?.toString() || "";
    const phoneNumber = formData.get("phoneNumber")?.toString().trim() || "";

    // Date validation
    if (!date) {
      setResult({
        type: "error",
        message: "Please select a callback date.",
      });
      return;
    }

    if (date < today) {
      setResult({
        type: "error",
        message: "Please select today or a future date.",
      });
      return;
    }

    // Time validation
    if (!timeSlot) {
      setResult({
        type: "error",
        message: "Please select a convenient time.",
      });
      return;
    }

    // Phone validation
    if (!validatePhone(phoneNumber)) {
      setResult({
        type: "error",
        message:
          "Please enter a valid New Zealand phone number, e.g. +64212345678.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      formData.set(
        "access_key",
        "c818ac59-d55d-4c6b-ba47-9169731209d9"
      );

      // Optional: makes the email easier to understand
      formData.set("subject", "Callback Request - Move Mate Relocations NZ");
      formData.set("from_name", "Move Mate Relocations NZ");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          type: "success",
          message:
            "Thanks! Your callback request has been received. We’ll call you at your selected time.",
        });

        form.reset();
      } else {
        setResult({
          type: "error",
          message:
            "Sorry, we couldn't submit your request. Please try again.",
        });
      }
    } catch (error) {
      console.error("Callback request error:", error);

      setResult({
        type: "error",
        message:
          "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex max-w-8xl flex-col items-center justify-center gap-6 px-4 py-10 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Too Busy to Give Us a Call?
        </h2>

        <p className="mt-3 text-sm text-gray-600 sm:text-base">
          Drop your phone number and choose a convenient time — we’ll call you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-2 lg:flex-row lg:flex-wrap">
          {/* Date */}
          <div className="w-full lg:w-[200px]">
            <label
              htmlFor="callback-date"
              className="mb-1.5 block text-sm font-semibold text-midnight-blue"
            >
              Callback Date
            </label>

            <input
              id="callback-date"
              name="date"
              type="date"
              min={today}
              defaultValue={today}
              required
              aria-label="Select a date for the callback"
              className="h-[3rem] w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Time */}
          <div className="w-full lg:w-[200px]">
            <label
              htmlFor="callback-time"
              className="mb-1.5 block text-sm font-semibold text-midnight-blue"
            >
              Preferred Time
            </label>

            <div className="relative">
              <select
                id="callback-time"
                name="timeSlot"
                required
                defaultValue=""
                aria-label="Select a callback time"
                className="h-[3rem] w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  Select time
                </option>

                <option value="8:00 AM - 9:00 AM">
                  8:00 AM - 9:00 AM
                </option>
                <option value="9:00 AM - 10:00 AM">
                  9:00 AM - 10:00 AM
                </option>
                <option value="10:00 AM - 11:00 AM">
                  10:00 AM - 11:00 AM
                </option>
                <option value="11:00 AM - 12:00 PM">
                  11:00 AM - 12:00 PM
                </option>
                <option value="12:00 PM - 1:00 PM">
                  12:00 PM - 1:00 PM
                </option>
                <option value="1:00 PM - 2:00 PM">
                  1:00 PM - 2:00 PM
                </option>
                <option value="2:00 PM - 3:00 PM">
                  2:00 PM - 3:00 PM
                </option>
                <option value="3:00 PM - 4:00 PM">
                  3:00 PM - 4:00 PM
                </option>
                <option value="4:00 PM - 5:00 PM">
                  4:00 PM - 5:00 PM
                </option>
                <option value="5:00 PM - 6:00 PM">
                  5:00 PM - 6:00 PM
                </option>
                <option value="6:00 PM - 7:00 PM">
                  6:00 PM - 7:00 PM
                </option>
                <option value="7:00 PM - 8:00 PM">
                  7:00 PM - 8:00 PM
                </option>
              </select>

              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Phone */}
          <div className="w-full lg:w-[300px]">
            <label
              htmlFor="phone-number"
              className="mb-1.5 block text-sm font-semibold text-midnight-blue"
            >
              Phone Number
            </label>

            <input
              id="phone-number"
              name="phoneNumber"
              required
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+64 21 234 5678"
              pattern="^(?:\+64[\s-]?2\d[\s-]?\d{3}[\s-]?\d{4}|02\d{7,9})$"
              title="Enter a valid New Zealand phone number"
              className="h-[3rem] w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Enter your phone number"
            />
          </div>

          {/* Submit */}
          <div className="w-full lg:w-auto">
            <label className="mb-1.5 block text-sm font-semibold text-transparent">
              Submit
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="Request a call"
              className="h-[3rem] w-full cursor-pointer rounded-md bg-primary px-10 py-2 font-bold text-white transition-colors duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 lg:w-auto"
            >
              {isSubmitting ? "Sending..." : "Request A Call"}
            </button>
          </div>
        </div>

        {/* Result Message */}
        {result && (
          <div
            role="alert"
            className={`mx-auto mt-5 max-w-2xl rounded-lg border px-4 py-3 text-center text-sm font-medium ${
              result.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">
                {result.type === "success" ? "✓" : "!"}
              </span>

              <span>{result.message}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};