import { useSelector } from "react-redux";
import { useTheme } from "../thems/hooks";
import styles from "./styles.module.css";
import classNames from "classnames";
import { selectRestaurantById } from "../../redux_store/features/entities/restaurant/selectors";

export const FilterButton = ({ id, onClickFilter }) => {
  const { theme } = useTheme();

  // const restaurantName =
  //   id === "reset" || id === "all"
  //     ? id
  //     : useSelector((store) => selectRestaurantById(store, id).name);

// какой из способов лучше (можно это в какие-то const's добавить), или такой функционал лучше не добавлять
      const restaurantName =
      id === "reset" || id === "All"
        ? id
        : ( () => { 
          const selectRestaurant = useSelector((store) => selectRestaurantById(store, id));
          return selectRestaurant ? selectRestaurant.name : null
        })();

  // как лучше?
  // const restaurantName = useSelector( (store) => selectRestaurantName(store, id))

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
      restaurant: {restaurantName}
    </button>
  );
};
