export const Dish = ( { data }) => {
  // console.log('value of name', data)
return <> 
  {data.name}:
  <ul>
    <li>price: {data.price}.</li>
    <li>ingredients: {data.ingredients.join(', ')}.</li>
  </ul>
</>
}