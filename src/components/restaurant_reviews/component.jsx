import { Review } from "./review/component";

export const RestaurantReviews = ({ reviews }) => {
  // console.log('value of reviews', reviews)
  return (
    <>
      <h3>Reviews: </h3>
      <ul>
        {reviews.map((elem) => <li> <Review data={elem} /> </li>)}
      </ul>
    </>
  );
};
