import { RestaurantMenu } from "../restaurant_menu/component"
import { RestaurantReviews } from "../restaurant_reviews/component"

export const Restaurant = ( { data }) => {
// console.log('value of name', data)
return <div style={{border: "1px solid green",padding: "15px",marginBottom: "10px"}}> 
<h2>{data.name}</h2>
  <RestaurantMenu menu={data.menu}/>
  <RestaurantReviews reviews={data.reviews} />
</div>
}