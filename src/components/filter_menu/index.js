import styles from "./styles.module.css"

export const onActive = (e) => {
  let container = e.target.closest('div')
  
  if (!!e.target.closest('button') && e.target.closest('button').tagName === "BUTTON") {
   let buttons =  container.getElementsByTagName('button')
   Array.from(buttons).map(elem => elem.classList.remove(styles.buttonActive))
    
    e.target.closest('button').classList.add(styles.buttonActive)
  }
  }