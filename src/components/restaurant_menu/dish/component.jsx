import { useState } from "react";
import { Counter } from "../../counter/component";

const [maxCount, minCount] = [5, 0];

export const Dish = ({ data }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      {data.name}:
      <ul>
        <li>price: {data.price}.</li>
        <li>ingredients: {data.ingredients.join(", ")}.</li>
        <Counter onValueDown={() => setCount( count - 1 < minCount ? minCount : count - 1)}
                onValueUp={() => setCount(count + 1 > maxCount ? maxCount : count + 1)}
                count = {count}
        />
      </ul>
    </>
  );
};
