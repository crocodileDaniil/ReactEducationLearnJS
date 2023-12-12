
import classNames from 'classnames'
import { ThemsManager } from '../thems_manager/component'
import styles from './styles.module.css'
import { Button } from '../button/component'

export const Footer = (  {className} ) => {
return <footer className={styles.root}> 
<div className={classNames(className,styles.footer )}>
  <h2>restaurants info</h2>
  <Button name={"homeWork 8"}/>
  <ThemsManager />
  </div>
</footer>
}