type TeamFile = {
  name: string;
  type: string;
  href: string;
};

type SharedFilesProps = {
  files: TeamFile[];
};

export default function SharedFiles({ files }: SharedFilesProps) {
  return (
    <section className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Shared Files
      </p>

      <div className="flex flex-col gap-3">
        {files.map((file) => (
          <a
            key={file.name}
            href={file.href}
            className="flex items-center gap-[10px] rounded-lg transition hover:bg-[#F6F6F7]"
          >
            <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] bg-[#F6F6F7] text-[11px]">
              📄
            </div>

            <p className="truncate text-[12px] text-[#1F1F25]">{file.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
