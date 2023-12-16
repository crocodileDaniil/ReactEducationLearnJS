import { useState } from "react";
import { Counter } from "../../counter/component";
import { useEffect } from "react";

import styles from "./styles.module.css";
import classNames from "classnames";
import { useTheme } from "../../thems/hooks";

const [maxCount, minCount] = [5, 0];
const discount = 0.3;

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);
  const [isDiscountUse, setIsDiscountUse] = useState(false);
  useEffect(() => setCount(0), [isDiscountUse]);

  const priceDiscount = 1 - discount;
  const totalPrice = (
    isDiscountUse ? dish?.price * priceDiscount * count : dish?.price * count
  ).toFixed(2);

  const { theme } = useTheme();

  if (!!dish) {
    return (
      <div className={styles.dish}>
        <p className={styles.name}>{dish.name}</p>
        <div>
          <div className={styles.infoDish}>
            <div className={styles.infoDishElement}>price: {dish.price}$</div>
            <div className={styles.infoDishElement}>
              ingredients: {dish.ingredients.join(", ")}
            </div>
          </div>
        </div>
        <div className={styles.order}>
          <button
            className={classNames(
              styles.discount,
              {
                [styles.discount_white]:
                  theme.whiteThemeButton === true &&
                  theme.whiteThemeAll === true,
              },
              {
                [styles.discount_dark]:
                  theme.whiteThemeButton === false ||
                  theme.whiteThemeAll === false,
              }
            )}
            onClick={() => setIsDiscountUse(!isDiscountUse)}
          >
            {" "}
            Use discount: {isDiscountUse ? "Yes" : "No"}{" "}
          </button>

          <Counter
            onValueDown={() =>
              setCount(count - 1 < minCount ? minCount : count - 1)
            }
            onValueUp={() =>
              setCount(count + 1 > maxCount ? maxCount : count + 1)
            }
            count={count}
            // price={isDiscountUse ? data.price * priceDiscount : data.price}
            type={"button-menu"}
          />
          <span className={styles.totalPrice}>Total price:{totalPrice}$ </span>
        </div>
      </div>
    );
  }
};
