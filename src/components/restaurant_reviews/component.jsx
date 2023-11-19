export const RestaurantReviews = ( { reviews }) => {
  // console.log('value of reviews', reviews)
return <>
<h3>Reviews: </h3>
<ul>
  {reviews.map(elem => {
    return <li>{elem.user}:
    <ul>
      <li>review: {elem.text}.</li>
      <li>rating: {elem.rating}</li>
    </ul>
    </li>
  })}
</ul>
 </>
}