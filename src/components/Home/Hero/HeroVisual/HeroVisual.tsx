import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-[7.831px] bg-[linear-gradient(45deg,#00B6CE_14.29%,#007585_85.71%)] px-2 py-2 sm:px-4 sm:py-4 lg:min-h-[440px] lg:rounded-[30px] lg:px-[71px] lg:py-[28.5px] ">
      <div className="relative z-10 w-full overflow-hidden rounded-[10px] shadow-[0px_13.72px_27.44px_0px_#1F1F2547] lg:rounded-[20px] lg:shadow-[0px_28px_56px_0px_#1F1F2547]">
        <Image
          src="/images/hero/hero.png"
          alt="PN Africa dashboard"
          width={1138}
          height={420}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
