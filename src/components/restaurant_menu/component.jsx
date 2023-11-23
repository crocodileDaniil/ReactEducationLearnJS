import { Dish } from "./dish/component"

export const RestaurantMenu = ( { menu }) => {
  // console.log('value of menu', menu)
return <> 
  <h3>Меню: </h3>
  <ul> 
      {menu.map((elem) => <li> <Dish data={elem}/> </li>)}
  </ul>
</>
}