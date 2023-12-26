import { useSelector } from "react-redux";
import { useTheme } from "../thems/hooks";
import styles from "./styles.module.css";
import classNames from "classnames";
import { selectRestaurantById } from "../../redux_store/features/entities/restaurant/selectors";
import { useGetRestaurantsQuery } from "../../redux_store/features/services/api";
import { NavLink } from "react-router-dom";

export const FilterButton = ({ id, onClickFilter }) => {
  const { theme } = useTheme();

  // console.log('Id this filterButton', id)

  
  const { data, isFetching } = useGetRestaurantsQuery();

  const restaurantArray= data?.find((item) => (item?.id === id));
 
  const restaurantName = restaurantArray?.name

  const road = `/restaurant/${id}`;
  if (!isFetching) {
  return (
    <NavLink
    to={road}
      onClick={onClickFilter}
      className={classNames(
        styles.button,
        {
          [styles.button_white]:
            theme.whiteThemeButton === true && theme.whiteThemeAll === true,
        },
        {
          [styles.button_dark]:
            theme.whiteThemeButton === false || theme.whiteThemeAll === false,
        }
      )}
    >
      restaurant: {restaurantName ? restaurantName : id}
    </NavLink>
  );
}
};
