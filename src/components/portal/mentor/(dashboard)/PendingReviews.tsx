import { PendingReview } from "@/src/types/mentor/dashboard";
import { Button } from "@/src/components/ui";

interface PendingReviewsProps {
  reviews: PendingReview[];
}

export default function PendingReviews({ reviews }: PendingReviewsProps) {
  return (
    <div className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Pending Reviews
      </p>

      <div className="mt-3 space-y-[12px]">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex items-center justify-between gap-3"
          >
            <p className="text-[12px] text-[#1F1F25]">
              {review.title} — {review.menteeName}
            </p>

            <Button
              variant="primary"
              className="h-[25px] rounded-[8px] px-4 text-[10px] font-semibold"
            >
              Review
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
