import { Restaurant } from "../restaurant/component"

export const Restaurants = ( { dataFoods }) => {
  // console.log('value of window', mock)
return <div style={{border: "1px solid pink",padding: "15px"}}> 

  {dataFoods.map((elem) => <Restaurant data={elem}/>)}
</div>
}