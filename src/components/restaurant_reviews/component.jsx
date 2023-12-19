import classNames from "classnames";
import { Review } from "./review/component";
import { Loading } from "../loading/component";
import { useGetRestaurantReviewsQuery } from "../../redux_store/features/services/api";
import { ReviewRestaurantBlock } from "../review_restaurans_block/component";

import styles from './styles.module.css'


export const RestaurantReviews = ({ restaurantId,reviewsIds,className }) => {
  const { data, isFetching, isLoading } =
  useGetRestaurantReviewsQuery(restaurantId);

 
  if (isFetching) {
    return <Loading />;
  }
  if (!isFetching) {
    return (
      <div className={classNames(styles.restaurantReviews, className)}>
        <h3>Reviews: </h3>
        <div className={styles.reviews}>
        {data.map((review) => (
            <ReviewRestaurantBlock review={review} />
          ))}
        </div>
      </div>
    );
  }
};