import classNames from "classnames";
import { RestaurantMenu } from "../restaurant_menu/component";
import { RestaurantReviews } from "../restaurant_reviews/component";
import { ReviewForm } from "../review_form/component";

import styles from "./style.module.css";


export const Restaurant = ({ data }) => {
  


  // console.log("store: ", getStore());
  if (!!data) {
    // console.log("restaurantsRev: ",data.reviews)  ;
    return (
      
      <div className={classNames(styles.restaurant)}>
        <h2 className={styles.title}>{data?.name}</h2>
        <RestaurantMenu menuIds={data?.menu}  restaurantId={data.id} />
        <RestaurantReviews
          reviewsIds={data.reviews}
          restaurantId={data.id}
          className={styles.reviews}
        />
        <ReviewForm className={styles.reviewForm}  restaurantId={data.id}/>
      </div>
    );
  }
};
