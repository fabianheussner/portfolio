import { Link } from "gatsby"
import React from "react"

import styles from './tabbar.module.scss';


const Tabbar = () => (
  <nav className={`${styles.tabbar} ${styles.hidden}`}>
    <Link to={"/"} activeClassName={styles.active} className={styles.home}>Home</Link>
    <Link to="/work/" activeClassName={styles.active} className={styles.work}>Work</Link>
    <Link to="/about/" activeClassName={styles.active} className={styles.about}>About</Link>
    <Link to="/contact/" activeClassName={styles.active} className={styles.contact}>Contact</Link>
  </nav>
)

export default Tabbar