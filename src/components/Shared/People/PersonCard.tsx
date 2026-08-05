import Image from "next/image";
import { Person } from "./people.types";

export default function PersonCard({
  name,
  role,
  image,
  initials,
  avatarBg = "#1F1F25",
}: Person) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#E5E5EB] bg-white px-6 py-8 text-center transition-shadow hover:shadow-md">
      {image ? (
        <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="72px"
          />
        </div>
      ) : (
        <div
          className="flex h-[72px] w-[72px] items-center justify-center rounded-full text-[26px] font-bold text-white"
          style={{ backgroundColor: avatarBg }}
        >
          {initials}
        </div>
      )}

      <h3 className="text-[15px] font-semibold text-[#1F1F25]">{name}</h3>

      <p className="text-xs text-[#5D5D61]">{role}</p>
    </div>
  );
}
