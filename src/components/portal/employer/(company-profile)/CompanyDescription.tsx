"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";
import { employerCompanyProfileData } from "@/src/data/employer/company-profile";

export default function CompanyDescription() {
  const [description, setDescription] = useState(
    employerCompanyProfileData.description,
  );

  const [message, setMessage] = useState("");

  const handleSaveChanges = () => {
    // Replace with API call later.
    console.log({
      description,
    });

    setMessage("Changes saved successfully.");
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Description
      </p>

      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Tell candidates about your company culture and mission..."
        className="mt-[34px] min-h-[77px] w-full resize-none rounded-[8px] border border-[#E5E5EB] px-[13px] py-[12px] text-[12px] text-[#1F1F25] outline-none placeholder:text-[#6B6B70] focus:border-[#00B6CE]"
      />

      {message && <p className="mt-2 text-[11px] text-[#5D5D61]">{message}</p>}

      <Button
        variant="dark"
        onClick={handleSaveChanges}
        className="mt-[14px] h-[36px] rounded-[8px] px-4 text-[11px] font-semibold"
      >
        Save Changes
      </Button>
    </section>
  );
}
