import NavBar from '../components/NavBar';
import SpaceLaunch from '../components/SpaceLaunch';
import styles from './Technology.module.css';

function Technology() {
  return (
    <main className={styles.main}>
      <NavBar />
      <SpaceLaunch />
    </main>
  )
}

export default Technology

