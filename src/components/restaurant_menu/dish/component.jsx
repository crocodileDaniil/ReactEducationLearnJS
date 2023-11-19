export const Dish = ( { data }) => {
  // console.log('value of name', data)
return <li> 
  {data.name}:
  <ul>
    <li>price: {data.price}.</li>
    <li>ingredients: {data.ingredients.join(', ')}.</li>
  </ul>
</li>
}