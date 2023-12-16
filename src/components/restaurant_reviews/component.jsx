import classNames from "classnames";
import { Review } from "./review/component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReviewStatus } from "../../redux_store/features/entities/review/selectors";
import { getReviews } from "../../redux_store/features/entities/review/thunks/get_reviews";
import { selectUsersStatus } from "../../redux_store/features/entities/user/selectors";
import { getUsers } from "../../redux_store/features/entities/user/thunks/get_users";
import { Loading } from "../loading/component";

import styles from './styles.module.css'


export const RestaurantReviews = ({ restaurantId,reviewsIds,className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(restaurantId));
  }, [restaurantId]);

  useEffect( () => {
    dispatch(getUsers())
  },[])

  const statusReviews = useSelector((store) => selectReviewStatus(store));
  const statusUsers = useSelector((store) => selectUsersStatus(store))

 
  if (statusReviews !== "fullfield" || statusUsers !== "fullfield") {
    return <Loading />;
  }
  if (statusReviews === "fullfield" && statusUsers === "fullfield") {
    return (
      <div className={classNames(styles.restaurantReviews, className)}>
        <h3>Reviews: </h3>
        <div className={styles.reviews}>
          {reviewsIds.map((reviewId) => (
            <Review reviewId={reviewId} />
          ))}
        </div>
      </div>
    );
  }
};