interface AccountSettingsProps {
  fullName: string;
  email: string;
}

export default function AccountSettings({
  fullName,
  email,
}: AccountSettingsProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Account
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-semibold text-[#1F1F25]">
            Full Name
          </span>

          <input
            type="text"
            value={fullName}
            disabled
            className="h-[38px] rounded-[8px] border border-[#E5E5EB] bg-[#F5F6F8] px-3 text-[13px] text-[#6B6B73] outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-semibold text-[#1F1F25]">
            Email Address
          </span>

          <input
            type="email"
            value={email}
            disabled
            className="h-[38px] rounded-[8px] border border-[#E5E5EB] bg-[#F5F6F8] px-3 text-[13px] text-[#6B6B73] outline-none"
          />
        </label>
      </div>
    </section>
  );
}
