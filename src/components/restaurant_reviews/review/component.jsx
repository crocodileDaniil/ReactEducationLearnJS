import { useSelector } from "react-redux";
import styles from "./styles.module.css"
import { selectReviewById } from "../../../redux_store/features/entities/review/selectors";
import { selectUserById } from "../../../redux_store/features/entities/user/selectors";

export const Review = ({ reviewId }) => {
  // console.log('value reviewsIds: ', reviewId)
  const review = useSelector( state => selectReviewById(state,reviewId))
  const reviewName = useSelector( state => selectUserById(state,review.userId))

  return (
    <div className={styles.review}>
     <p className={styles.user}> {reviewName}</p>
      <div className={styles.text}>
        <div>review: {review.text}.</div>
        <div>rating: {review.rating}</div>
      </div>
    </div>
  );
};
