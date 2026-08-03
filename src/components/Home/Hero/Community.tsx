import Image from "next/image";

const avatars = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
];

export default function Community() {
  return (
    <div className="flex w-[380px] items-center gap-[10px]">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="h-7 w-7 overflow-hidden rounded-full border-2 border-white"
          >
            <Image
              src={avatar}
              alt={`Graduate ${index + 1}`}
              width={28}
              height={28}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <p className="font-[family:var(--font-body)] text-[14px] font-medium leading-5 text-[#5D5D61]">
        Joined by 2,400+ graduates across Africa
      </p>
    </div>
  );
}
