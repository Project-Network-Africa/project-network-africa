import Link from "next/link";

import { ContentItem } from "./content-section.type";
import Thumbnail from "./Thumbnail";

export default function ContentCard({
  title,
  description,
  meta,
  href,
  image,
  gradient,
  illustration,
}: ContentItem) {
  return (
    <article className="flex flex-col gap-4">
      <Thumbnail
        image={image}
        gradient={gradient}
        illustration={illustration}
      />

      <div className="flex flex-col gap-2">
        <Link href={href}>
          <h3 className="text-[18px] font-semibold leading-7 text-[#1F1F25] transition-colors hover:text-[#00B6CE]">
            {title}
          </h3>
        </Link>

        {description && (
          <p className="text-[14px] leading-7 text-[#5D5D61]">{description}</p>
        )}

        {meta && <p className="text-[13px] text-[#5D5D61]">{meta}</p>}
      </div>
    </article>
  );
}
