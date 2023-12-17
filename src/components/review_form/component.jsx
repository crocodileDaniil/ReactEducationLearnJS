import { useReducer } from "react";
import { Counter } from "../counter/component";
import { Button } from "../button/component";

import styles from "./styles.module.css";
import classNames from "classnames";
import { useCreateReviewMutation } from "../../redux_store/features/services/api";

const STEP = 0.5;
const [leftBoundary, rightBoundary] = [0, 5];

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
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: boundaryConrol(action.payload) };
    default:
      return state;
  }
};

const boundaryConrol = (n) => {
  if (+n >= rightBoundary) return rightBoundary;
  if (+n <= leftBoundary) return leftBoundary;
  return n;
};



export const ReviewForm = ({ className, productId }) => {
  const [createReview,review] = useCreateReviewMutation()
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  // const userId = '20bed9b5-9c7b-4771--75b74ed1904a'
  const restaurantId = 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2'

  // console.log('review', review)
  // console.log('formValue', formValue)
  return (
    <div className={ classNames(className,styles.flex)}>
      <div className={styles.formWrapper}>
        <div className={styles.title}>tell us your feedback </div>
        <div className={styles.form}>
          <div className={styles.formElemnt}>
            <label className={styles.formLegend} htmlFor="name">Name</label>
            <input
            className={styles.input}
            placeholder="John"
              id="name"
              type="text"
              value={formValue.name}
              onChange={(e) => {
                dispatch({ type: setName, payload: e.target.value });
              }}
            />
          </div>
          <div className={styles.formElemnt}> 
            <label className={styles.formLegend} htmlFor="text">Text</label>
            <input
            className={styles.input}
              id="text"
              type="text"
              placeholder="Good"
              value={formValue.text}
              onChange={(e) => {
                dispatch({ type: setText, payload: e.target.value });
              }}
            />
          </div>
          <div className={styles.formElemnt}>
            <label className={styles.formLegend} htmlFor="rating">rating</label>
            <input
            className={styles.input}
              id="rating"
              type="number"
              value={(+formValue.rating).toFixed(1)}
              onChange={(e) => {
                dispatch({ type: setRating, payload: e.target.value });
              }}
            />
              <Counter
            onValueDown={() =>
              dispatch({ type: setRating, payload: +formValue.rating - STEP })
            }
            // count={(+formValue.rating).toFixed(1)}
            onValueUp={() =>
              dispatch({ type: setRating, payload: +formValue.rating + STEP })
            }

            type={'button-review'}
          />
          </div>

          <Button name = {'отправить'} onClick={() => createReview({ restaurantId , newReview: formValue})}/>
        </div>
      </div>
    </div>
  );
};
