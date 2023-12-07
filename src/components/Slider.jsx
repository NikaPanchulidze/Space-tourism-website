import { NavLink } from 'react-router-dom'
import styles from './Slider.module.css'
import { useEffect, useRef } from 'react'

function Slider({onIsOpen}) {
  const sliderRef = useRef(null);

  useEffect(function () {
    const handleOutsideClick = (event) => {
      if (!sliderRef.current.contains(event.target)) {
        onIsOpen(false);
        document.removeEventListener('click', handleOutsideClick);
      }
    };

    const clickTimeout = setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 0);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      clearTimeout(clickTimeout);
    };
  }, [onIsOpen])
  return (
    <nav className={styles.slider} ref={sliderRef}>
      <button onClick={(op) => onIsOpen(!op)}><img className={styles.iconClosed} src="/shared/icon-close.svg" alt="close Icon"/></button>
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
  )
}

export default Slider
