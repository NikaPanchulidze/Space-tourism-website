import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <section className={styles.section}>
      <img src="/shared/logo.svg" alt="logo" />
      <div className={styles.helperContainer}>
        <div className={styles.line}></div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink to="/">
                <span>00</span> HOME
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/destination">
                <span>01</span> DESTINATION
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/crew">
                <span>02</span> CREW
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/technology">
                <span>03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default NavBar
