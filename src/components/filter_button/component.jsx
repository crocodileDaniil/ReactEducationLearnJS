import { useSelector } from "react-redux";
import { useTheme } from "../thems/hooks";
import styles from "./styles.module.css";
import classNames from "classnames";
import { selectRestaurantById } from "../../redux_store/features/entities/restaurant/selectors";

export const FilterButton = ({ id, onClickFilter }) => {
  const { theme } = useTheme();

  // console.log('Id this filterButton', id)

const restaurantName =  useSelector((store) => selectRestaurantById(store, id)?.name);

  // console.log("filter", restaurantName);
  return (
    <button
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
    </button>
  );
};
