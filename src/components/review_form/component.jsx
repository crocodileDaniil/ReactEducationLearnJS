import { useReducer } from "react";
import { Counter } from "../counter/component";

const STEP = 0.5;
const [leftBoundary, rightBoundary] = [ 0, 5 ]

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: "5",
};

const [setName, setText, setRating] = ["setName", "setText", "setRating"];

const reducer = (state, action) => {
  console.log("value of action", action);
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    // return {  // нужно как на лекции, чтобы при изменении имени очищялись остальные поля или нет?
    //   ...state,
    //   name: action.payload,
    //   text: DEFAULT_FORM_VALUE.text,
    //   rating: DEFAULT_FORM_VALUE.rating,
    // };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: boundaryCheck(action.payload) };
    default:
      return state;
  }
};

const boundaryCheck = ( n ) => {
  if (+n >= rightBoundary) return rightBoundary;
  if (+n <= leftBoundary) return leftBoundary;
  return n
};

export const ReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formValue.name}
          onChange={(e) => {
            dispatch({ type: setName, payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <input
          id="text"
          type="text"
          value={formValue.text}
          onChange={(e) => {
            dispatch({ type: setText, payload: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="rating">rating</label>
        <input
          id="rating"
          type="number"
          value={(+formValue.rating).toFixed(1)}
          onChange={(e) => {
            dispatch({ type: setRating, payload: e.target.value });
          }}
        />
      </div>

      <Counter
        onValueDown={() =>
          dispatch({ type: setRating, payload: +formValue.rating - STEP })
        }
        // count={(+formValue.rating).toFixed(1)}
        onValueUp={() =>
          dispatch({ type: setRating, payload: +formValue.rating + STEP })}
      />
    </div>
  );
};
