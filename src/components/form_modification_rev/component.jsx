import { useReducer } from "react";
import { Counter } from "../counter/component";
import { Button } from "../button/component";

import styles from './styles.module.css'
import classNames from "classnames";
import { useCreateReviewMutation, useUpdateReviewMutation } from "../../redux_store/features/services/api";

const STEP = 0.5;
const [leftBoundary, rightBoundary] = [0, 5];

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: "5",
};

const [setName, setText, setRating] = ["setName", "setText", "setRating"];

const reducer = (state, action) => {
//   console.log("value of action", state);
  switch (action.type) {
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

export const FormModificationReview = ({ className, review, updateReview, onNoneUpdate }) => {
  const [formValue, dispatch] = useReducer(reducer, {
    text: review.text,
    rating: review.rating,
  });

  
const reviewId = review.id;

    // console.log(review.id);

  return (
    <div className={classNames(className, styles.flex)}>
      <div className={styles.formWrapper}>
        <div className={styles.form}>
          <Button name={"отмена"} onClick={() => onNoneUpdate(false)} />
          <div className={styles.formElemnt}>
            <label className={styles.formLegend} htmlFor="text">
              Text
            </label>
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
            <label className={styles.formLegend} htmlFor="rating">
              rating
            </label>
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
              type={"button-review"}
            />
          </div>

          <Button
            name={"отправить"}
            onClick={() =>
              updateReview({
                reviewId,
                newReview: {
                  ...formValue,
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
