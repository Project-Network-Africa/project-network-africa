import Image from "next/image";
import Link from "next/link";
import { Programme } from "./ProgrammeCatalogue.types";

interface ProgrammeCardProps {
  programme: Programme;
}

export default function ProgrammeCard({ programme }: ProgrammeCardProps) {
  const isOpen = programme.status === "Applications open";
  const isSeatsLeft = programme.status === "Seats left";

  return (
    <article className="overflow-hidden rounded-[12px] border border-[#DEDEE2] bg-white lg:rounded-[14px]">
      {/* Image */}
      <div className="relative h-[145px] w-full overflow-hidden lg:h-[158px]">
        {/* <Image
          src={programme.image}
          alt={programme.title}
          fill
          className="object-cover"
        /> */}
        <Image
          src={programme.image}
          alt={programme.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 font-body text-[10px] font-semibold uppercase leading-[100%] text-[#1F1F25] lg:left-4 lg:top-4 lg:text-[11px]">
          {programme.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex min-h-[250px] flex-col p-4 lg:min-h-[258px] lg:p-5">
        <h3 className="font-body text-[17px] font-bold leading-[120%] text-[#1F1F25] lg:text-[18px]">
          {programme.title}
        </h3>

        <p className="mt-3 line-clamp-2 font-body text-[12px] font-normal leading-[150%] text-[#5D5D61] lg:text-[13px]">
          {programme.description}
        </p>

        {/* Delivery */}
        <div className="mt-5 flex items-center gap-2">
          <span className="flex h-[12px] w-[12px] items-center justify-center rounded-[2px] border border-[#5D5D61]">
            <span className="h-[4px] w-[4px] rounded-full bg-[#5D5D61]" />
          </span>

          <span className="font-body text-[11px] font-semibold leading-[100%] text-[#1F1F25]">
            {programme.deliveryMode}
          </span>
        </div>

        {/* Next start */}
        <div className="mt-4 flex h-[32px] items-center justify-between rounded-[6px] bg-[#F8F8F8] px-3">
          <span className="font-body text-[10px] font-normal leading-[100%] text-[#5D5D61]">
            Next start
          </span>

          <span className="font-body text-[10px] font-semibold leading-[100%] text-[#1F1F25]">
            {programme.nextStart}
          </span>

          <span
            className={`font-body text-[9px] font-semibold leading-[100%] ${
              isOpen
                ? "text-[#1BAA63]"
                : isSeatsLeft
                  ? "text-[#E8A600]"
                  : "text-[#5D5D61]"
            }`}
          >
            {programme.status}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/programmes/${programme.id}`}
          className="mt-3 flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#1F1F25] font-body text-[11px] font-semibold text-white transition hover:bg-[#00B6CE]"
        >
          View programme
        </Link>
      </div>
    </article>
  );
}
