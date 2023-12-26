import { useState } from "react"
import { useUpdateReviewMutation } from "../../redux_store/features/services/api";
import { FormModificationReview } from "../form_modification_rev/component";
import { Review } from "../restaurant_reviews/review/component"

export const ReviewRestaurantBlock = ({ review }) => {
  const [modificated, setModificated] = useState(false);
 const [updateReview, result] = useUpdateReviewMutation();
// console.log(result)

if (result.isLoading) {
    return <div> Loading </div>;
}
  return !modificated ? (
    <Review
      review={review}
      onModificatonClick={() => setModificated(!modificated)}
    />
  ) : (
    <FormModificationReview
      review={review}
      updateReview={updateReview}
      onNoneUpdate={setModificated}
    />
  );
};