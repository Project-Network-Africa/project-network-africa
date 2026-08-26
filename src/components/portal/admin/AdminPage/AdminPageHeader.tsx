interface AdminPageHeaderProps {
  title: string;
  initials?: string;
}

export default function AdminPageHeader({
  title,
  initials = "CN",
}: AdminPageHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h1 className="font-body text-[28px] font-bold leading-9 text-[#1F1F25]">
        {title}
      </h1>

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[12px] font-semibold text-white">
        {initials}
      </div>
    </div>
  );
}
