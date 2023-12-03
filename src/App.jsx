import { RestaurantsPage } from "./pages/restaurants_page/component"
import './styles/index.css'

export const App =  ( { data } ) => {
  // console.log('value of app', data)
  return <div>
    <RestaurantsPage mock={ data }/>
  </div>
}