import Image from "next/image";

const avatars = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
];

export default function Community() {
  return (
    <div className="flex max-w-[380px] flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
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

      <p className="text-[13px] font-medium text-[#5D5D61] sm:text-sm">
        Joined by 2,400+ graduates across Africa
      </p>
    </div>
  );
}
