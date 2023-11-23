import { RestaurantsPage } from "./pages/restaurants_page/component"

export const App =  ( { data } ) => {
  // console.log('value of app', data)
  return <div>
    <RestaurantsPage mock={ data }/>
  </div>
}