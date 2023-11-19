import { FilterButton } from "../filter_button/component"

export const FilterMenu = ( { filterArray, filterClick } ) => {
  // console.log('value of filterMenu', filterArray)
return <div style={{border: "1px solid red",padding: "15px",marginBottom: "10px"}}> 
  {filterArray.map((name,id) => <FilterButton name={name} clickFilter={() => filterClick(id)} />)}
</div>
}