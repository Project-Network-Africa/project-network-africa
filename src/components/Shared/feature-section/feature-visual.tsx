// import { FeatureVisualProps } from "./feature-section.types";

// export default function FeatureVisual({ children }: FeatureVisualProps) {
//   return (
//     <div className="relative h-[363.46px] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1F1F25] to-[#0F0F14] lg:h-[600px] lg:w-[650px] lg:shrink-0 lg:rounded-[32px]">
//       {children}
//     </div>
//   );
// }
import { FeatureVisualProps } from "./feature-section.types";

export default function FeatureVisual({ children }: FeatureVisualProps) {
  return (
    <div className="relative h-[363.46px] lg:w-full min-w-0 max-w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1F1F25] to-[#0F0F14] sm:h-[400px] md:h-[480px] lg:h-[500px] xl:h-[600px]  xl:w-[650px] xl:shrink-0 lg:rounded-[32px] xl:aspect-auto ">
      {children}
    </div>
  );
}
