import { FeatureVisualProps } from "./feature-section.types";

export default function FeatureVisual({ children }: FeatureVisualProps) {
  return (
    <div className="relative h-[260px]  w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1F1F25] to-[#0F0F14] sm:h-[300px] lg:h-[340px] lg:max-w-[520px] lg:flex-shrink-0">
      {children}
    </div>
  );
}
