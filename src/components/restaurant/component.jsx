import classNames from "classnames";
import { RestaurantMenu } from "../restaurant_menu/component";
import { RestaurantReviews } from "../restaurant_reviews/component";
import { ReviewForm } from "../review_form/component";

import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux_store/features/entities/restaurant/selectors";

import { getStore } from "../../redux_store";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((store) => selectRestaurantById(store, id));


  console.log("store: ", getStore());
  if (!!restaurant) {
    return (
      
      <div className={classNames(styles.restaurant)}>
        <h2 className={styles.title}>{restaurant?.name}</h2>
        <RestaurantMenu menuIds={restaurant?.menu} restId={id} />
        <RestaurantReviews
          reviewsIds={restaurant.reviews}
          className={styles.reviews}
        />
        <ReviewForm className={styles.reviewForm} />
      </div>
    );
  }
};
