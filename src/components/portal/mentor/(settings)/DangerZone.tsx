import { Button } from "@/src/components/ui";

export default function DangerZone() {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Danger Zone
      </p>

      <p className="text-[12px] text-[#5D5D61]">
        Deactivating your account will pause your application and cohort access.
      </p>

      <Button
        href="settings/deactivate"
        variant="light"
        className="mt-4  px-4 py-[10px] text-[12px] font-semibold text-[#1F1F25]"
      >
        Deactivate Account
      </Button>
    </section>
  );
}
