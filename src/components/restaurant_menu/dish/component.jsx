import { useState } from "react";
import { Counter } from "../../counter/component";
import { useEffect } from "react";

const [maxCount, minCount] = [5, 0];
const discount = 0.3;

export const Dish = ({ data }) => {
  const [count, setCount] = useState(0);
  const [isDiscountUse, setIsDiscountUse] = useState(false);
  useEffect(() => setCount(0), [isDiscountUse]);

  // console.log('rerender')
  const priceDiscount = 1 - discount;

  return (
    <>
      {data.name}:
      <ul>
        <li>price: {data.price}$</li>
        <li>ingredients: {data.ingredients.join(", ")}.</li>
        <button onClick={() => setIsDiscountUse(!isDiscountUse)}>
          {" "}
          Use discount: {isDiscountUse ? "Yes" : "No"}{" "}
        </button>
        <Counter
          order={true}
          onValueDown={() =>
            setCount(count - 1 < minCount ? minCount : count - 1)
          }
          onValueUp={() =>
            setCount(count + 1 > maxCount ? maxCount : count + 1)
          }
          count={count}
          price={isDiscountUse ? data.price * priceDiscount : data.price}
        />
      </ul>
    </>
  );
};
