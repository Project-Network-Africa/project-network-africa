import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex h-[34px] w-[144px] items-center">
      <Image
        src="/images/logo.svg"
        alt="PN Africa"
        width={144}
        height={34}
        priority
      />
    </Link>
  );
}
