import { Link, useSearchParams } from 'react-router-dom';
import styles from './SpaceLaunch.module.css';
import Data from "../../data.json";
import { useEffect, useState } from 'react';

function SpaceLaunch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const index = searchParams.get("index");
  const data = Data.technology[index];

  const [shouldAppear, setShouldAppear] = useState(false);

  useEffect(() => {
    setShouldAppear(true);
    const id = setInterval(() => {
      if (index < 2) {
        setSearchParams({ index: (+index + 1).toString() });
      } else if (index === "2") {
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
      <div className="container">
        <div className={styles.containerTechnology}>
          <h2 className={styles.headingSecondary}><span>03</span> SPACE LAUNCH 101</h2>
          <div className={styles.content}>
            <div className={styles.dots}>
              <Link to={`?index=${0}`} className={index === '0' ? styles.active : ''}>1</Link>
              <Link to={`?index=${1}`} className={index === '1' ? styles.active : ''}>2</Link>
              <Link to={`?index=${2}`} className={index === '2' ? styles.active : ''}>3</Link>
            </div>
            <div className={`${styles.details} ${shouldAppear ? 'appear' : ''}`}>
              <p className={styles.subHeader}>THE TERMINOLOGY...</p>
              <h1 className={styles.name}>{data?.name.toUpperCase()}</h1>
              <p className={styles.detail}>{data?.description}</p>
            </div>
            <img src={data?.images.portrait.slice(1)} alt="rocket" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpaceLaunch
