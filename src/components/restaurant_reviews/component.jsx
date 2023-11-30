import classNames from "classnames";
import { Review } from "./review/component";
import styles from './styles.module.css'

export const RestaurantReviews = ({ reviews,className }) => {
  // console.log('value of reviews', reviews)
  return (
    <div className={classNames(styles.restaurantReviews,className)}>
      <h3>Reviews: </h3>
      <div className={styles.reviews}>
        {reviews.map((elem) =>  <Review data={elem} /> )}
      </div>
    </div>
  );
};
