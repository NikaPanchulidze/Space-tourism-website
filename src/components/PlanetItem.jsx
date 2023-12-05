import { useParams } from 'react-router-dom';
import styles from './PlanetItem.module.css';
import Data from "../../data.json";

function PlanetItem() {
  const {name} = useParams();
  const data = Data.destinations;
  const planetInfo = data.find(planet => planet.name.toLowerCase() === name);
  
  return (
    <div className={styles.planetItem}>
      <h1>{planetInfo?.name}</h1>
      <p className={styles.planetText}>
        {planetInfo?.description}
      </p>
      <div className={styles.planetDetails}>
        <div className={styles.planetDetail}>
          <p>AVG. DISTANCE</p>
          <p>{planetInfo?.distance}</p>
        </div>
        <div className={styles.planetDetail}>
          <p>EST. TRAVEL TIME</p>
          <p>{planetInfo?.travel}</p>
        </div>
      </div>
    </div>
  )
}

export default PlanetItem
