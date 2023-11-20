import { useState } from "react";

const [maxCount, minCount] = [5, 0];

const upCount = (n) => {
  n++;
  return n > maxCount ? maxCount : n;
};

const downCount = (n) => {
  n--;
  return n < minCount ? minCount : n;
};

export const Dish = ({ data }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      {data.name}:
      <ul>
        <li>price: {data.price}.</li>
        <li>ingredients: {data.ingredients.join(", ")}.</li>
        <div>
          <button
            onClick={() =>
              setCount(count + 1 > maxCount ? maxCount : count + 1)
            }
            style={{ marginRight: "10px" }}
          >
            +
          </button>
          <span>{count}</span>
          <button
            onClick={() => setCount(downCount(count))}
            style={{ marginLeft: "10px" }}
          >
            
            -
          </button>
        </div>
      </ul>
    </>
  );
};
