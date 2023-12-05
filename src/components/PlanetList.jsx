import { NavLink, Outlet, useParams } from 'react-router-dom'
import styles from './PlanetList.module.css'
import Data from "../../data.json";

function PlanetList() {
  const {name} = useParams();
  const data = Data.destinations;
  const planetInfo = data.find(planet => planet.name.toLowerCase() === name);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.headingSecondary}><span>01</span> PICK YOUR DESTINATION</h2>
        <div className={styles.planetList__container}>
          <img src={planetInfo?.images.png.slice(1)} alt="planet" />
          <div className={styles.planetList__details}>
            <div className={styles.planetsList}>
              <NavLink to="moon">MOON</NavLink>
              <NavLink to="mars">MARS</NavLink>
              <NavLink to="europa">EUROPA</NavLink>
              <NavLink to="titan">TITAN</NavLink>
            </div>
            <Outlet planetInfo={planetInfo}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanetList
