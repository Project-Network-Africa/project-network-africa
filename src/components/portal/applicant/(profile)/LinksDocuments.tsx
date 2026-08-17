import { LinksDocumentsProps } from "./profile";

export default function LinksDocuments({ documents }: LinksDocumentsProps) {
  return (
    <div className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-5 py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Links & Documents
      </p>

      <div className="flex flex-col gap-[10px]">
        {documents.map((document) => (
          <a
            key={document.label}
            href={document.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] rounded-[6px] hover:bg-[#F6F6F7]"
          >
            <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] bg-[#F6F6F7] text-[11px]">
              ↗
            </span>

            <span className="text-[12px] text-[#1F1F25]">{document.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
