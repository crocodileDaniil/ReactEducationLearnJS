import { Provider } from "react-redux"

import { RestaurantsPage } from "./pages/restaurants_page/component"
import store from "./redux_store"


import './styles/index.css'


export const App =  ( { data } ) => {
  // console.log('value of app', data)
  return <div>
    <Provider store={store}>
    <RestaurantsPage mock={ data }/>
    </Provider>
  </div>
}