import { FilterFoods } from '../../components/filter_menu/component'
import { Restaurants } from '../../components/restaurants_window/component'

export const RestaurantsPage = ( { mock } ) => {
  const filters = structuredClone(mock).map(elem => elem.name)
 
  return <div>
    <FilterFoods filters={filters} onFilterClick={ (n) => {console.log('Page: ',filters[n])}}/>
    <Restaurants dataFoods={mock} />
    
  </div>
}