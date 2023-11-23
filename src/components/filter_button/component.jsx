export const FilterButton = ( { name, onClickFilter }) => {
  return <button onClick={onClickFilter}>
    {name}
  </button>
}
