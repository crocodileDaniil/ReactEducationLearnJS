import { Restaurant } from "../restaurant/component"

export const RestaurantsWindow = ( { mock }) => {
  // console.log('value of window', mock)
return <div style={{border: "1px solid pink",padding: "15px"}}> 

  {mock.map((elem) => <Restaurant data={elem}/>)}
</div>
}