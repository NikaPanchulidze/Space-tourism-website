import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import styles from './Homepage.module.css'

function Homepage() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Hero />
    </main>
  )
}

export default Homepage
