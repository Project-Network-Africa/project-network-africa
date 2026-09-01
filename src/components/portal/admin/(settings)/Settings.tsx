"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";

// import DashboardCard from "../(dashboard)/DashboardCard";

import SettingsCard from "./SettingsCard";
import SettingsTabs from "./SettingsTabs";
import DangerZone from "./DangerZone";

import {
  adminAccountsSettings,
  brandingSettings,
  dangerZone,
  messagingSettings,
  paymentSettings,
  securitySettings,
  settingsTabs,
} from "./settings-data";

import { SettingsItemData } from "./settings.types";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  const handleSaveChanges = () => {
    console.log("Saving platform settings...");
  };

  const handleSettingsAction = (item: SettingsItemData) => {
    console.log(`${item.action}:`, item.label);
  };

  const handleDangerAction = (action: string) => {
    console.log("Danger zone action:", action);
  };

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* PAGE HEADER */}

        {/* <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button
            variant="primary"
            className="h-9 rounded-lg px-5 text-[12px] font-semibold"
            onClick={handleSaveChanges}
          >
            Save changes
          </Button>
        </div> */}

        {/* SETTINGS TABS */}

        {/* <section className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SettingsTabs
            tabs={settingsTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Button
              variant="primary"
              className="h-9 rounded-lg px-5 text-[12px] font-semibold"
              onClick={handleSaveChanges}
            >
              Save changes
            </Button>
          </div>
        </section> */}
        <section className=" flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Settings tabs */}
          <div className="w-full overflow-x-auto md:w-auto">
            <SettingsTabs
              tabs={settingsTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </div>

          {/* Save button */}
          <div className="flex w-full justify-end md:w-auto">
            <Button
              variant="primary"
              className="h-9 rounded-lg px-5 text-[12px] font-semibold"
              onClick={handleSaveChanges}
            >
              Save changes
            </Button>
          </div>
        </section>

        {/* GENERAL */}

        {activeTab === "general" && (
          <>
            {/* TOP ROW — 2 COLUMNS */}

            <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <SettingsCard
                section={brandingSettings}
                onAction={handleSettingsAction}
              />

              <SettingsCard
                section={adminAccountsSettings}
                onAction={handleSettingsAction}
                footer={
                  <Button
                    variant="primary"
                    className="h-9 rounded-lg px-4 text-[12px] font-semibold"
                    onClick={() => console.log("Invite administrator")}
                  >
                    Invite administrator
                  </Button>
                }
              />
            </section>

            {/* MIDDLE ROW — 3 COLUMNS */}

            <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <SettingsCard
                section={paymentSettings}
                onAction={handleSettingsAction}
              />

              <SettingsCard
                section={messagingSettings}
                onAction={handleSettingsAction}
              />

              <SettingsCard
                section={securitySettings}
                onAction={handleSettingsAction}
              />
            </section>

            {/* DANGER ZONE */}

            <DangerZone data={dangerZone} onAction={handleDangerAction} />
          </>
        )}

        {/* USERS & ACCESS */}

        {activeTab === "users-access" && (
          <section className="mt-4">
            <SettingsCard
              section={adminAccountsSettings}
              onAction={handleSettingsAction}
              footer={
                <Button
                  variant="primary"
                  className="h-9 rounded-lg px-4 text-[12px] font-semibold"
                  onClick={() => console.log("Invite administrator")}
                >
                  Invite administrator
                </Button>
              }
            />
          </section>
        )}

        {/* PROGRAMMES */}

        {activeTab === "programmes" && (
          <section className="mt-4">
            <SettingsCard
              section={brandingSettings}
              onAction={handleSettingsAction}
            />
          </section>
        )}

        {/* PAYMENTS */}

        {activeTab === "payments" && (
          <section className="mt-4">
            <SettingsCard
              section={paymentSettings}
              onAction={handleSettingsAction}
            />
          </section>
        )}

        {/* MESSAGING */}

        {activeTab === "messaging" && (
          <section className="mt-4">
            <SettingsCard
              section={messagingSettings}
              onAction={handleSettingsAction}
            />
          </section>
        )}

        {/* SECURITY */}

        {activeTab === "security" && (
          <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <SettingsCard
              section={securitySettings}
              onAction={handleSettingsAction}
            />

            <DangerZone data={dangerZone} onAction={handleDangerAction} />
          </section>
        )}
      </div>
    </main>
  );
}
