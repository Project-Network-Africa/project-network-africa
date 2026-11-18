
"use client";

import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Newsletter subscription will be connected to a backend or email service.
  }

  return (
<section
  className="relative w-full overflow-hidden bg-white px-5 pb-16 pt-8 sm:px-8 lg:px-20"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(31,31,37,0.045) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(31,31,37,0.045) 1px, transparent 1px)
    `,
    backgroundSize: "68px 68px",
  }}
>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-8 rounded-xl bg-[#DDF7F8] px-7 py-9 sm:px-10 sm:py-11 lg:grid-cols-2 lg:items-center lg:gap-12">

          {/* Left: Newsletter introduction */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#008B9D]">
              The PN Africa Weekly
            </span>

            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#1F1F25] sm:text-3xl">
              Useful reads, without the noise.
            </h2>

            <p className="mt-3 max-w-[450px] text-[14px] leading-[1.7] text-[#5D5D61] sm:text-sm">
              Get practical career guidance, new programme updates and
              the best community stories delivered to your inbox.
            </p>

            <p className="mt-3 text-[12px] font-semibold text-[#008B9D]">
              Join 2,400+ learners, alumni and mentors.
            </p>
          </div>

          {/* Right: Subscription form */}
          <div>
            <form onSubmit={handleSubscribe}>
              <label
                htmlFor="newsletter-email"
                className="mb-2 block text-xs font-semibold text-[#1F1F25]"
              >
                Email address
              </label>

              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 rounded-md border border-[#D5E8E9] bg-white px-4 py-3.5 text-sm text-[#1F1F25] outline-none placeholder:text-[#999999] focus:border-[#008B9D]"
                />

                <button
                  type="submit"
                  className="rounded-md bg-[#1F1F25] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#38383F]"
                >
                  Subscribe
                </button>
              </div>

              <p className="mt-3 text-[12px] text-[#77777D]">
                No spam. Unsubscribe whenever you like.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
