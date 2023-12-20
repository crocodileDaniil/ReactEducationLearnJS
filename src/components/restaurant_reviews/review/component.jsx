import { useGetUsersQuery } from "../../../redux_store/features/services/api";
import { Button } from "../../button/component";

import styles from "./styles.module.css"


export const Review = ({ review, onModificatonClick }) => {
  const { data, isFetching, isLoading } = useGetUsersQuery();

  if (!isFetching) {
    const user = data.find((user) => user.id === review.userId);
    return (
      <div className={styles.review}>
        <Button name={"изменить"} onClick={onModificatonClick} />
        <p className={styles.user}> {user?.name}</p>
        <div className={styles.text}>
          <div>review: {review.text}.</div>
          <div>rating: {review.rating}</div>
        </div>
      </div>
    );
  }
};
