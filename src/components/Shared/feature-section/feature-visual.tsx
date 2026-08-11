import Image from "next/image";
import { FeatureVisualProps } from "./feature-section.types";

export default function FeatureVisual({
  children,
  image,
  imageAlt = "",
}: FeatureVisualProps) {
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1F1F25] to-[#0F0F14] sm:h-[300px] lg:h-[340px] lg:max-w-[520px] lg:flex-shrink-0">
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 520px"
        />
      ) : (
        children
      )}
    </div>
  );
}
