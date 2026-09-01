"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";

import NotificationStats from "./NotificationStats";
import ComposeMessage from "./ComposeMessage";
import DeliveryHealth from "./DeliveryHealth";
import MessageHistory from "./MessageHistory";

import { notificationStats } from "./notifications-data";

export default function Notifications() {
  const [showTemplates, setShowTemplates] = useState(false);

  const handleBroadcast = () => {
    console.log("Open broadcast message composer");
  };

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* PAGE HEADER */}

        {/* <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between align-right">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="light"
              className="h-9 rounded-lg px-4 text-[12px] font-medium"
              onClick={() => setShowTemplates(true)}
            >
              Templates
            </Button>

            <Button
              variant="primary"
              className="h-9 rounded-lg px-4 text-[12px] font-semibold"
              onClick={handleBroadcast}
            >
              Broadcast message
            </Button>
          </div>
        </div> */}
        <div className="flex justify-end">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="light"
              className="h-9 rounded-lg px-4 text-[12px] font-medium"
              onClick={() => setShowTemplates(true)}
            >
              Templates
            </Button>

            <Button
              variant="primary"
              className="h-9 rounded-lg px-4 text-[12px] font-semibold"
              onClick={handleBroadcast}
            >
              Broadcast message
            </Button>
          </div>
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <NotificationStats stats={notificationStats} />

        {/* =====================================================
            COMPOSE + DELIVERY HEALTH
        ====================================================== */}

        <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ComposeMessage />
          </div>

          <div className="lg:col-span-1">
            <DeliveryHealth />
          </div>
        </section>

        {/* =====================================================
            MESSAGE HISTORY
        ====================================================== */}

        <MessageHistory />

        {/* =====================================================
            TEMPLATES MODAL PLACEHOLDER
        ====================================================== */}

        {showTemplates && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-5">
            <div className="w-full max-w-md rounded-xl border border-[#DDE1E5] bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-bold text-[#1F1F25]">
                  Notification templates
                </h2>

                <button
                  type="button"
                  className="text-[18px] text-[#737379]"
                  onClick={() => setShowTemplates(false)}
                >
                  ×
                </button>
              </div>

              <p className="mt-3 text-[12px] leading-5 text-[#737379]">
                Notification templates can be managed here.
              </p>

              <Button
                variant="light"
                className="mt-5 h-9 rounded-lg px-4 text-[12px] font-semibold"
                onClick={() => setShowTemplates(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
