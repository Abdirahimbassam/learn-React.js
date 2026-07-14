
import styles from './app.module.css'
import { Another } from './Another'

export const App = () => {

  return (

    <div className={styles.AppContainer}>
        <h1 className={styles.headerTitle}>Styling In React.js</h1>
        <p className={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quae!</p>
      
     <Another />
    </div>
  )
}
