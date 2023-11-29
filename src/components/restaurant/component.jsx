import classNames from "classnames"
import { RestaurantMenu } from "../restaurant_menu/component"
import { RestaurantReviews } from "../restaurant_reviews/component"
import { ReviewForm } from "../review_form/component"

import styles from './style.module.css'

export const Restaurant = ( { data }) => {
// console.log('value of name', data)
return <div  className={classNames(styles.restaurant)}
// style={{border: "1px solid green",padding: "15px",marginBottom: "10px"}}

> 
<h2 className={styles.title}>{data.name}</h2>
  <RestaurantMenu menu={data.menu}/>
  <RestaurantReviews reviews={data.reviews} className={styles.reviews}/>
  <ReviewForm className={styles.reviewForm}/>
</div>
}