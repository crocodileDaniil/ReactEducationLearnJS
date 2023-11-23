export const Review = ({ data }) => {
  return (
    <>
      {data.user}:
      <ul>
        <li>review: {data.text}.</li>
        <li>rating: {data.rating}</li>
      </ul>
    </>
  );
};
