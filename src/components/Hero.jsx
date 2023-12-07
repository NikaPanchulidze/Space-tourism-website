import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={`section ${styles.sectionHero}`}>
      <div className="container">
        <div className={styles.heroDetails}>
          <p className={styles.subHeader}>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className={styles.headingPrimary}>SPACE</h1>
          <p className={styles.heroText}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
             Well sit back, and relax because we’ll 
             give you a truly out of this world 
             experience!
          </p>
        </div>
        <div className={styles.active}>
          <Link to="destination"><button>EXPLORE</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
