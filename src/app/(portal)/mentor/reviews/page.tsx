import ReviewsQueue from "@/src/components/portal/mentor/(reviews)/ReviewsQueue";
import { mentorReviews } from "@/src/data/mentor/reviews";

export default function MentorReviewsPage() {
  return (
    <div className="w-full space-y-[20px]">
      <ReviewsQueue reviews={mentorReviews} />
    </div>
  );
}
