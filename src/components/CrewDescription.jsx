import { Link, useSearchParams } from 'react-router-dom';
import styles from './CrewDescription.module.css';
import Data from "../../data.json";
import { useEffect, useState } from 'react';

function CrewDescription() {
  const [searchParams, setSearchParams] = useSearchParams();
  const index = searchParams.get("index");
  const data = Data.crew[index];
  const [shouldAppear, setShouldAppear] = useState(false);


  useEffect(() => {
    setShouldAppear(true);
    const id = setInterval(() => {
      if (index < 3) {
        setSearchParams({ index: (+index + 1).toString() });
      } else if (index === "3") {
        setSearchParams({ index: '0' });
      }
    }, 2000);

    // Set shouldAppear to true after a short delay
    const delayTimeout = setInterval(() => {
      setShouldAppear(false);
    }, 1500);

    return () => {
      clearInterval(id);
      clearTimeout(delayTimeout);
    };
  }, [setSearchParams, index]);

  return (
    <section className={styles.section}>
      <div className={"container"}>
        <div className={styles.containerCrew}>
          <h2 className={styles.headingSecondary}><span>02</span> MEET YOUR CREW</h2>
          <div className={`${styles.crewDetails}  ${shouldAppear ? 'appear' : ''}`}>
            <p className={styles.subHeader}>{data?.role}</p>
            <h1 className={styles.name}>{data?.name.toUpperCase()}</h1>
            <p className={styles.detail}>{data?.bio}</p>
          </div>
          <div className={styles.dots}>
            <Link to={`?index=${0}`} className={index === '0' ? styles.active : ''}></Link>
            <Link to={`?index=${1}`} className={index === '1' ? styles.active : ''}></Link>
            <Link to={`?index=${2}`} className={index === '2' ? styles.active : ''}></Link>
            <Link to={`?index=${3}`} className={index === '3' ? styles.active : ''}></Link>
          </div>
          <img src={data?.images.png.slice(1)} alt="astronaut" />
        </div>
      </div>
    </section>
  );
}

export default CrewDescription;
