import { FeatureVisualProps } from "./feature-section.types";

export default function FeatureVisual({ children }: FeatureVisualProps) {
  return (
    <div className="relative h-[340px] w-[520px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1F1F25] to-[#0F0F14]">
      {children}
    </div>
  );
}
