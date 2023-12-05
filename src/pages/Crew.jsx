import styles from './Crew.module.css';
import NavBar from "../components/NavBar";
import CrewDescription from '../components/CrewDescription';

function Crew() {
  return (
    <main className={styles.main}>
      <NavBar />
      <CrewDescription />
    </main>
  )
}

export default Crew
