import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/component";
import { ErrorPage } from "./pages/error_page/component";
import { HomePage } from "./pages/home_page/component";

import { RestaurantsPage } from "./pages/restaurants_page/component";
import store from "./redux_store";

import "./styles/index.css";

export const App = ({ data }) => {
  // console.log('value of app', data)
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Layout> */}
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />

            <Route
              path="/restaurants"
              element={<RestaurantsPage mock={data} />}
            >
              <Route index element={<div> Restaurant/s </div>} />
            </Route>

            <Route path={"/restaurant"} element={<RestaurantsPage />}>
              <Route index element={<div> Restaurant/s </div>} />
              <Route path=":restaurantId" element={<Restaurants />} />
            </Route>
          </Routes>
          {/* </Layout> */}
        </BrowserRouter>
      </Provider>
    </div>
  );
};
