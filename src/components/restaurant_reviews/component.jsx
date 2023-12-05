import classNames from "classnames";
import { Review } from "./review/component";
import styles from './styles.module.css'

export const RestaurantReviews = ({ reviewsIds,className }) => {
  // console.log('value of reviews', reviewsIds)
  return (
    <div className={classNames(styles.restaurantReviews,className)}>
      <h3>Reviews: </h3>
      <div className={styles.reviews}>
        {reviewsIds.map((reviewId) =>  <Review reviewId={reviewId} /> )}
      </div>
    </div>
  );
};
