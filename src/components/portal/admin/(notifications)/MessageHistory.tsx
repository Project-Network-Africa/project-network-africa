"use client";

import { messageHistory } from "./notifications-data";

export default function MessageHistory() {
  return (
    <section className="mt-4 rounded-xl border border-[#DDE1E5] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[12px] font-semibold uppercase text-[#737379]">
          Message history
        </h2>

        <button
          type="button"
          className="text-[12px] font-medium text-[#00B6CE] transition hover:text-[#009CB2]"
          onClick={() => console.log("Filter channels")}
        >
          All channels⌄
        </button>
      </div>

      {/* Desktop */}

      <div className="mt-5 hidden md:block">
        <div className="space-y-5">
          {messageHistory.map((message) => (
            <div
              key={message.id}
              className="grid grid-cols-[2fr_1.2fr_1.1fr_1.2fr_0.9fr_0.6fr] items-center gap-4 text-[12px]"
            >
              <p className="font-semibold text-[#303035]">{message.message}</p>

              <p className="text-[#737379]">{message.audience}</p>

              <p className="text-[#737379]">{message.channel}</p>

              <p className="text-[#737379]">{message.date}</p>

              <p
                className={
                  message.status === "Delivered"
                    ? "font-semibold text-[#008F58]"
                    : message.status === "Scheduled"
                      ? "font-semibold text-[#00B6CE]"
                      : "font-semibold text-[#F26B21]"
                }
              >
                {message.status}
              </p>

              <button
                type="button"
                className="text-right font-semibold text-[#00B6CE] transition hover:text-[#009CB2]"
                onClick={() => console.log("View message:", message)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}

      <div className="mt-5 space-y-4 md:hidden">
        {messageHistory.map((message) => (
          <div
            key={message.id}
            className="rounded-lg border border-[#DDE1E5] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-[12px] font-semibold text-[#303035]">
                {message.message}
              </p>

              <p
                className={
                  message.status === "Delivered"
                    ? "shrink-0 text-[11px] font-semibold text-[#008F58]"
                    : message.status === "Scheduled"
                      ? "shrink-0 text-[11px] font-semibold text-[#00B6CE]"
                      : "shrink-0 text-[11px] font-semibold text-[#F26B21]"
                }
              >
                {message.status}
              </p>
            </div>

            <div className="mt-3 space-y-1">
              <p className="text-[11px] text-[#737379]">{message.audience}</p>

              <p className="text-[11px] text-[#737379]">{message.channel}</p>

              <p className="text-[11px] text-[#737379]">{message.date}</p>
            </div>

            <button
              type="button"
              className="mt-3 text-[12px] font-semibold text-[#00B6CE]"
              onClick={() => console.log("View message:", message)}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
