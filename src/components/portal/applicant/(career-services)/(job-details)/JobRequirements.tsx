interface JobRequirementsProps {
  requirements: string[];
}

export default function JobRequirements({
  requirements,
}: JobRequirementsProps) {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        What We`re Looking For
      </p>

      <ul className="flex flex-col gap-3">
        {requirements.map((requirement) => (
          <li
            key={requirement}
            className="flex gap-3 text-[13px] leading-[1.5] text-[#1F1F25]"
          >
            <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#00B6CE]" />

            <span>{requirement}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
