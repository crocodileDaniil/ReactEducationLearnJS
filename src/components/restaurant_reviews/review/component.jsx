import styles from "./styles.module.css"

export const Review = ({ data }) => {
  return (
    <div className={styles.review}>
     <p className={styles.user}> {data.user}</p>
      <div className={styles.text}>
        <div>review: {data.text}.</div>
        <div>rating: {data.rating}</div>
      </div>
    </div>
  );
};
