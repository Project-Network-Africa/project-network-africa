import { Review } from "@/src/types/mentor/reviews";
import ReviewQueueItem from "./ReviewQueueItem";

interface ReviewsQueueProps {
  reviews: Review[];
}

export default function ReviewsQueue({ reviews }: ReviewsQueueProps) {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="space-y-[2px]">
        {reviews.map((review) => (
          <ReviewQueueItem key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
