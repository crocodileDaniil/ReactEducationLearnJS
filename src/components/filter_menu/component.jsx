import { FilterButton } from "../filter_button/component"

export const FilterFoods = ( { filters, onFilterClick } ) => {
  // console.log('value of filterMenu', filterArray)
return <div style={{border: "1px solid red",padding: "15px",marginBottom: "10px"}}> 
  {filters.map((name,id) => <FilterButton name={name} onClickFilter={() => onFilterClick(id)} />)}
</div>
}