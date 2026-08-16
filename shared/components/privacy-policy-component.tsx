 "use client";
import { useEffect, useState } from "react";
const NAV_IDS = [
  "information",
  "collection",
  "use",
  "marketing",
  "sharing",
  "cookies",
  "security",
  "rights",
  "contact",
];
const PrivacyPolicyComponent = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <main className="bg-slate-50 text-midnight-blue">
      {/* Hero */}
      <section className="bg-midnight-blue text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Move Mate Relocations NZ
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Your privacy matters to us. This policy explains how we collect,
              use and protect your personal information when you use our website
              and services.
            </p>

            <p className="mt-6 text-xs text-white/60 sm:text-sm">
              Last updated: 15 August 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
          {/* Quick Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 border-l-2 border-primary/20 pl-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                On this page
              </p>

              <nav className="space-y-2.5 text-sm">
                {[
                  { id: "information", label: "Information We Collect" },
                  { id: "collection", label: "How We Collect Information" },
                  { id: "use", label: "How We Use Information" },
                  { id: "marketing", label: "Marketing Emails" },
                  { id: "sharing", label: "Who Receives Information" },
                  { id: "cookies", label: "Cookies" },
                  { id: "security", label: "Security" },
                  { id: "rights", label: "Your Privacy Rights" },
                  { id: "contact", label: "Contact Us" },
                ].map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`block transition-colors ${
                      activeId === id
                        ? "font-semibold text-primary"
                        : "text-gray-500 hover:text-primary"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy */}
          <article className="min-w-0 rounded-2xl bg-white px-6 py-8 shadow-sm ring-1 ring-black/5 sm:px-10 sm:py-10 lg:px-12">
            {/* Intro */}
            <div className="border-b border-gray-100 pb-8">
              <p className="text-base leading-8 text-gray-600">
                Move Mate Relocations NZ ("Move Mate Relocations", "we", "us",
                or "our") respects your privacy and is committed to protecting
                the personal information you provide to us.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-600">
                This Privacy Policy explains how we collect, use, store and
                protect your personal information when you use our website or
                submit an enquiry through our forms.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-600">
                This policy is intended to comply with the{" "}
                <strong className="text-midnight-blue">
                  New Zealand Privacy Act 2020
                </strong>{" "}
                and applicable New Zealand electronic marketing laws, including
                the{" "}
                <strong className="text-midnight-blue">
                  Unsolicited Electronic Messages Act 2007
                </strong>
                .
              </p>
            </div>

            {/* Section helper styling */}
            <div className="max-w-none [&_h2]:mt-0 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-midnight-blue [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-midnight-blue [&_p]:mb-4 [&_p]:text-base [&_p]:leading-8 [&_p]:text-gray-600 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:leading-7 [&_li]:text-gray-600 [&_strong]:text-midnight-blue [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline">
              <section id="information" className="scroll-mt-8 pt-8">
                <h2>1. Information We Collect</h2>

                <p>
                  When you voluntarily submit a form on our website, we may
                  collect information such as:
                </p>

                <ul>
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your phone number</li>
                  <li>Your preferred callback date and time</li>
                  <li>Your relocation or moving requirements</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <p>
                  We only ask for information that is reasonably necessary to
                  respond to your enquiry or provide our services.
                </p>
              </section>

              <section id="collection" className="scroll-mt-8 pt-8">
                <h2>2. How We Collect Your Information</h2>

                <p>
                  Information is collected directly from you when you
                  voluntarily complete and submit a form on our website.
                </p>

                <p>
                  Our website does not operate its own customer database or user
                  account system.
                </p>

                <p>
                  Our forms are processed using{" "}
                  <a
                    href="https://web3forms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web3Forms
                  </a>
                  , a third-party form processing service. When you submit a
                  form, the information you provide is transmitted to Web3Forms
                  and forwarded to our nominated business email address.
                </p>

                <p>
                  Web3Forms may process or temporarily retain submitted
                  information in accordance with its own{" "}
                  <a
                    href="https://web3forms.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy practices
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://web3forms.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    terms
                  </a>
                  .
                </p>
              </section>

              <section id="use" className="scroll-mt-8 pt-8">
                <h2>3. How We Use Your Information</h2>

                <p>We may use your personal information to:</p>

                <ul>
                  <li>Respond to your enquiries</li>
                  <li>Contact you about a requested callback or quote</li>
                  <li>Provide information about our relocation services</li>
                  <li>Arrange or discuss services you have requested</li>
                  <li>Communicate with you about an existing enquiry</li>
                  <li>
                    Send promotional communications where you have consented to
                    receive them or where otherwise permitted by law
                  </li>
                  <li>Improve our services and customer experience</li>
                  <li>Prevent spam, fraud or misuse of our website</li>
                  <li>Comply with our legal obligations</li>
                </ul>
              </section>

              <section id="marketing" className="scroll-mt-8 pt-8">
                <h2>4. Marketing & Promotional Emails</h2>

                <p>
                  If you choose to receive promotional communications from us,
                  we may send you information about our services, special
                  offers, updates and other relevant business communications.
                </p>

                <div className="my-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
                  <p className="text-sm font-semibold leading-6 text-midnight-blue">
                    You can unsubscribe from marketing communications at any
                    time using the unsubscribe link included in our emails.
                  </p>
                </div>

                <p>
                  Every commercial marketing email we send will contain a clear
                  and functional unsubscribe option.
                </p>

                <p>
                  We will take reasonable steps to stop sending further
                  marketing communications after you unsubscribe, in accordance
                  with applicable New Zealand law.
                </p>

                <p>
                  We do not sell or rent your email address to third parties for
                  their own marketing purposes.
                </p>
              </section>

              <section id="sharing" className="scroll-mt-8 pt-8">
                <h2>5. Who Receives Your Information</h2>

                <h3>Move Mate Relocations NZ</h3>

                <p>
                  We receive your information through our business email account
                  so that we can respond to your enquiry and provide our
                  services.
                </p>

                <h3>Web3Forms</h3>

                <p>
                  We use Web3Forms to process and forward website form
                  submissions to our business email address.
                </p>

                <p>
                  Your information may therefore be processed outside New
                  Zealand by third-party service providers.
                </p>

                <p>
                  We do not otherwise sell, rent or trade your personal
                  information to third parties.
                </p>
              </section>

              <section className="scroll-mt-8 pt-8">
                <h2>6. Email Records</h2>

                <p>
                  We do not maintain a separate customer database for website
                  enquiries. When you submit a form, the information is
                  delivered to our business email account.
                </p>

                <p>
                  We may retain these emails for as long as reasonably necessary
                  to:
                </p>

                <ul>
                  <li>Respond to your enquiry</li>
                  <li>Provide requested services</li>
                  <li>Maintain reasonable business records</li>
                  <li>Resolve disputes</li>
                  <li>Meet legal or regulatory obligations</li>
                </ul>

                <p>
                  When personal information is no longer reasonably required, we
                  will take reasonable steps to securely delete or dispose of
                  it.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-8 pt-8">
                <h2>7. Cookies & Tracking</h2>

                <p>
                  Our website does not use cookies for advertising, behavioural
                  tracking or analytics.
                </p>

                <p>
                  We do not use cookies to create advertising profiles or track
                  you across other websites.
                </p>

                <p>
                  Some third-party services used to operate or protect our
                  website may process technical information as part of providing
                  their services.
                </p>
              </section>

              <section id="security" className="scroll-mt-8 pt-8">
                <h2>8. Security</h2>

                <p>
                  We take reasonable steps to protect personal information
                  against loss, unauthorised access, use, modification,
                  disclosure or other misuse.
                </p>

                <p>
                  However, no method of transmitting or storing information
                  online can be guaranteed to be completely secure.
                </p>
              </section>

              <section id="rights" className="scroll-mt-8 pt-8">
                <h2>9. Your Privacy Rights</h2>

                <h3>Access</h3>

                <p>
                  Under the New Zealand Privacy Act 2020, you generally have the
                  right to request access to personal information we hold about
                  you.
                </p>

                <h3>Correction</h3>

                <p>
                  If you believe that personal information we hold about you is
                  inaccurate, incomplete or misleading, you may ask us to
                  correct it.
                </p>

                <h3>Deletion</h3>

                <p>
                  You may contact us and request deletion of personal
                  information that we hold about you. Where we are not legally
                  required to retain the information, we will take reasonable
                  steps to delete it.
                </p>

                <p>
                  Please note that information may exist in email records or
                  within third-party systems used to process your submission.
                </p>
              </section>

              <section className="scroll-mt-8 pt-8">
                <h2>10. Children's Privacy</h2>

                <p>
                  Our services and website are not specifically directed at
                  children. We do not knowingly collect personal information
                  from children for marketing purposes.
                </p>
              </section>

              <section className="scroll-mt-8 pt-8">
                <h2>11. Changes to This Privacy Policy</h2>

                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes to our services, technology or legal obligations.
                </p>

                <p>
                  The "Last updated" date at the top of this Privacy Policy
                  indicates when the policy was most recently updated.
                </p>
              </section>

              {/* Contact */}
              {/* <section id="contact" className="scroll-mt-8 pt-8">
                <div className="rounded-2xl bg-midnight-blue p-6 text-white sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-wider ">
                    Questions?
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold text-white">
                    Contact Us
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white">
                    If you have any questions about this Privacy Policy, want to
                    access or correct your information, or wish to make a
                    privacy-related request, please get in touch with us.
                  </p>

                  <a
                    href="mailto:contact@movematerelocations.co.nz"
                    className="mt-5 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition "
                  >
                    <span className="text-white">contact@movematerelocations.co.nz</span>
                  </a>
                </div>
              </section> */}

              <div className="mt-10 border-t border-gray-100 pt-6">
                <p className="text-xs leading-6 text-gray-500">
                  This Privacy Policy is intended as a practical website privacy
                  notice and is not legal advice. If your business activities
                  change or you begin collecting additional types of personal
                  information, you should review this policy to ensure it
                  remains appropriate.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyComponent;