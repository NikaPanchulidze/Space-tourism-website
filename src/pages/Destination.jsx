import NavBar from '../components/NavBar'
import PlanetList from '../components/PlanetList'
import styles from './Destination.module.css'

function Destination() {
  return (
    <main className={styles.main}>
      <NavBar />
      <PlanetList />
    </main>
  )
}

export default Destination
