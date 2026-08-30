"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

export const QuoteForm = () => {
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

    return /^(?:02\d{7,9}|\+642\d{7,9})$/.test(cleanedPhone);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setResult(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const service = formData.get("service")?.toString() || "";
    const movingFrom = formData.get("movingFrom")?.toString().trim() || "";
    const movingTo = formData.get("movingTo")?.toString().trim() || "";
    const movingDate = formData.get("movingDate")?.toString() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const consent = formData.get("consent");

    // -------------------------
    // Name
    // -------------------------
    if (name.length < 2) {
      setResult({
        type: "error",
        message: "Please enter your full name.",
      });
      return;
    }

    // -------------------------
    // Email
    // -------------------------
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setResult({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // -------------------------
    // Phone
    // -------------------------
    if (!validatePhone(phone)) {
      setResult({
        type: "error",
        message:
          "Please enter a valid New Zealand phone number, e.g. +64 21 234 5678.",
      });
      return;
    }

    // -------------------------
    // Service
    // -------------------------
    if (!service) {
      setResult({
        type: "error",
        message: "Please select what you are moving.",
      });
      return;
    }

    // -------------------------
    // Moving From
    // -------------------------
    if (movingFrom.length < 2) {
      setResult({
        type: "error",
        message: "Please enter where you are moving from.",
      });
      return;
    }

    // -------------------------
    // Moving To
    // -------------------------
    if (movingTo.length < 2) {
      setResult({
        type: "error",
        message: "Please enter where you are moving to.",
      });
      return;
    }

    // -------------------------
    // Date
    // -------------------------
    if (movingDate && movingDate < today) {
      setResult({
        type: "error",
        message: "Please select today or a future moving date.",
      });
      return;
    }

    // -------------------------
    // Message
    // -------------------------
    if (message.length < 10) {
      setResult({
        type: "error",
        message:
          "Please provide a few details about your move so we can help you better.",
      });
      return;
    }

    // -------------------------
    // Consent
    // -------------------------
    if (consent !== "yes") {
      setResult({
        type: "error",
        message: "Please agree to our Privacy Policy and Terms and Conditions.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      formData.set("access_key", "a554da7a-dfaf-438a-a206-d33741f36375");

      formData.set("subject", "New Quote Request - Move Mate Relocations NZ");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          type: "success",
          message:
            "Thank you! Your quote request has been submitted successfully. Our team will review your requirements and get back to you shortly.",
        });

        form.reset();
      } else {
        setResult({
          type: "error",
          message: "Sorry, we couldn't submit your request. Please try again.",
        });
      }
      gtag("event", "conversion", {
        send_to: "AW-18371550412/cxx0CJ-g9ukcEL63nrhE",
        value: 1.0,
        currency: "NZD",
      });
    } catch (error) {
      console.error("Quote request error:", error);

      setResult({
        type: "error",
        message:
          "Something went wrong while submitting your request. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Your full name"
            className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={150}
              autoComplete="email"
              placeholder="you@example.com"
              className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="+64 21 234 5678"
              pattern="^(?:\+64[\s-]?2\d[\s-]?\d{3}[\s-]?\d{4}|02\d{7,9})$"
              title="Enter a valid New Zealand phone number"
              className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold">
            What are you moving?
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          >
            <option value="" disabled>
              Select a service
            </option>

            <option value="House Relocation">House Relocation</option>

            <option value="Office Relocation">Office Relocation</option>

            <option value="Warehouse Relocation">Warehouse Relocation</option>

            <option value="Intercity Relocation">Intercity Relocation</option>

            <option value="Single Item Movers">Single Item Movers</option>

            <option value="Furniture Removalists">Furniture Removalists</option>
          </select>
        </div>

        {/* Moving From / To */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="movingFrom"
              className="mb-2 block text-sm font-semibold"
            >
              Moving From
            </label>

            <input
              id="movingFrom"
              name="movingFrom"
              type="text"
              required
              minLength={2}
              maxLength={150}
              placeholder="Suburb / City"
              className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          <div>
            <label
              htmlFor="movingTo"
              className="mb-2 block text-sm font-semibold"
            >
              Moving To
            </label>

            <input
              id="movingTo"
              name="movingTo"
              type="text"
              required
              minLength={2}
              maxLength={150}
              placeholder="Suburb / City"
              className="h-12 w-full rounded-lg border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label
            htmlFor="movingDate"
            className="mb-2 block text-sm font-semibold"
          >
            Preferred Moving Date
          </label>

          <input
            id="movingDate"
            name="movingDate"
            type="date"
            min={today}
            className="h-12 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold">
            Tell us more
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={10}
            maxLength={2000}
            placeholder="Tell us about your move, the items involved, access details or anything else we should know..."
            className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <label className="flex items-start gap-3 text-xs leading-5 text-gray-500">
          <input
            id="winzQuoteEligibility"
            name="winzQuoteEligibility"
            value="yes"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 accent-primary"
          />

          <span>
            I confirm that I am eligible for a WINZ quote and would like to
            request one. I understand that this is a special service and that I
            may be required to provide additional information to verify my
            eligibility.
          </span>
        </label>

        {/* Privacy */}
        <label className="flex items-start gap-3 text-xs leading-5 text-gray-500">
          <input
            id="consent"
            name="consent"
            value="yes"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 accent-primary"
          />

          <span>
            By submitting this form, you agree to our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-primary hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-and-conditions"
              className="font-semibold text-primary hover:underline"
            >
              Terms and Conditions
            </Link>
            .
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Request My Quote"}
        </button>

        {/* Success / Error */}
        {result && (
          <div
            role="alert"
            className={`rounded-lg border px-4 py-3 text-sm font-medium ${
              result.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            <div className="flex items-start gap-2">
              <span className="font-bold">
                {result.type === "success" ? "✓" : "!"}
              </span>

              <span>{result.message}</span>
            </div>
          </div>
        )}

        <p className="text-center text-xs text-gray-400">
          We&apos;ll review your requirements and get back to you as soon as
          possible.
        </p>
      </form>
    </div>
  );
};
