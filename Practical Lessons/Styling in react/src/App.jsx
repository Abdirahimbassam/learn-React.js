
import styles from './app.module.css'
import { Another } from './Another'
import { useState } from 'react'

export const App = () => {

    const [ active ,  setActive ] = useState(true)
  return (

    <div className={`${styles.AppContainer} ${styles.darkMode}`}>

        <h1 className={ active ? styles.activeHeaderTitle : styles.inActiveHeaderTitle }>Hi Mom</h1>
        <p className={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae!</p>
      
     <Another />
    </div>
  )
}
