import { useState } from "react";
import { Counter } from "../../counter/component";
import { useEffect } from "react";

import styles from "./styles.module.css";

const [maxCount, minCount] = [5, 0];
const discount = 0.3;

export const Dish = ({ data }) => {
  const [count, setCount] = useState(0);
  const [isDiscountUse, setIsDiscountUse] = useState(false);
  useEffect(() => setCount(0), [isDiscountUse]);

  // console.log('rerender')
  const priceDiscount = 1 - discount;
  const totalPrice = (
    isDiscountUse ? data.price * priceDiscount * count : data.price * count
  ).toFixed(2);

  return (
    <div className={styles.dish}>
        <p className={styles.name}>{data.name}</p>
      <div>
        <div className={styles.infoDish}>
          <div className={styles.infoDishElement}>price: {data.price}$</div>
          <div className={styles.infoDishElement}>
            ingredients: {data.ingredients.join(", ")}
          </div>
        </div>
      </div>
      <div className={styles.order}>
        <button className={styles.discount}
         onClick={() => setIsDiscountUse(!isDiscountUse)}>
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
          type={'button-menu'}
        />
        <span className={styles.totalPrice}>Total price:{totalPrice}$ </span>
      </div>
    </div>
  );
};
