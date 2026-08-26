import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex h-[26.44px] w-[122px] items-center lg:h-[34px] lg:w-[144px]"
    >
      <Image
        src="/images/logo.svg"
        alt="PN Africa"
        width={144}
        height={34}
        className="h-full w-full object-contain"
        priority
      />
    </Link>
  );
}
