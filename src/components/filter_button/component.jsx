import styles from './styles.module.css'

export const FilterButton = ( { name, onClickFilter }) => {
  return <button onClick={onClickFilter} className={styles.button}>
   restaurant: {name}
  </button>
}
