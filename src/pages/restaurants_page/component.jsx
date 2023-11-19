import { FilterMenu } from '../../components/filter_menu/component'
import { RestaurantsWindow } from '../../components/restaurants_window/component'

export const RestaurantsPage = ( { mock } ) => {
  const filterArray = structuredClone(mock).map(elem => elem.name)
  // console.log('value of PAGE', mock)
  //  console.log('value of name', filterArray)
  return <div>
    <FilterMenu filterArray={filterArray} filterClick={ (n) => {console.log('Page: ',filterArray[n])}}/>
    <RestaurantsWindow mock={mock} />
    
  </div>
}