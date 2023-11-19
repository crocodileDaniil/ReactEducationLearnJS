import { Dish } from "./dish/component"

export const RestaurantMenu = ( { menu }) => {
  // console.log('value of menu', menu)
return <> 
  <h3>Меню: </h3>
  <ul> 
      {menu.map((elem) => <Dish data={elem}/>)}
  </ul>
</>
}