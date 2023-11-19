export const FilterButton = ( { name, clickFilter }) => {
  return <button onClick={clickFilter}>
    {name}
  </button>
}
