import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useEffect, useState } from 'react';
import Slider from './Slider';

function NavBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <section className={styles.section}>
      <img src="/shared/logo.svg" alt="logo" className={styles.logo} />
      <div className={styles.helperContainer}>
        <div className={styles.line}></div>
        {windowWidth > 730 && 
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <NavLink to="/">
                  {windowWidth > 1240 ? <span>00</span> : ""} HOME
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to="/destination">
                  {windowWidth > 1240 ? <span>01</span> : ""} DESTINATION
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to="/crew">
                {windowWidth > 1240 ? <span>02</span> : ""} CREW
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to="/technology">
                {windowWidth > 1240 ? <span>03</span> : ""} TECHNOLOGY
                </NavLink>
              </li>
            </ul>
          </nav>
        }
      </div>
      {windowWidth <= 729 && <button onClick={() => setIsOpen(!isOpen)} className={styles.openIcon}><img src="/shared/icon-hamburger.svg" alt="icon" /></button>}
      {isOpen && <Slider onIsOpen={setIsOpen}/>}
    </section>
  )
}

export default NavBar
