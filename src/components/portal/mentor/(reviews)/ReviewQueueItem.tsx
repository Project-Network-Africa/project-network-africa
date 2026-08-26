// "use client";

// import { useRouter } from "next/navigation";

// import { Button } from "@/src/components/ui";
// import { Review } from "@/src/types/mentor/reviews";

// interface ReviewQueueItemProps {
//   review: Review;
// }

// export default function ReviewQueueItem({ review }: ReviewQueueItemProps) {
//   const router = useRouter();

//   const handleReview = () => {
//     router.push(`/mentor/project-validation/${review.id}`);
//   };

//   return (
//     <div className="flex min-h-[49px] items-center justify-between gap-4">
//       <div className="min-w-0">
//         <p className="truncate text-[13px] font-semibold leading-[100%] text-[#1F1F25]">
//           {review.title}
//         </p>

//         <p className="mt-[5px] truncate text-[11px] leading-[100%] text-[#5D5D61]">
//           {review.menteeName} · {review.submittedAt}
//         </p>
//       </div>

//       <Button
//         variant="primary"
//         onClick={handleReview}
//         className="h-[35px] shrink-0 rounded-[8px] px-4 text-[11px] font-semibold"
//       >
//         Review
//       </Button>
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/src/components/ui";
import { Review } from "@/src/types/mentor/reviews";

interface ReviewQueueItemProps {
  review: Review;
}

export default function ReviewQueueItem({ review }: ReviewQueueItemProps) {
  const router = useRouter();

  const handleReview = () => {
    router.push(`/mentor/reviews/${review.id}`);
  };

  return (
    <div className="flex min-h-[49px] items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold leading-[100%] text-[#1F1F25]">
          {review.title}
        </p>

        <p className="mt-[5px] truncate text-[11px] leading-[100%] text-[#5D5D61]">
          {review.menteeName} · {review.submittedAt}
        </p>
      </div>

      <Button
        variant="primary"
        onClick={handleReview}
        className="h-[35px] shrink-0 rounded-[8px] px-4 text-[11px] font-semibold"
      >
        Review
      </Button>
    </div>
  );
}
