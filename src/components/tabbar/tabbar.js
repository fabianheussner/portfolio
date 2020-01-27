import { Link } from "gatsby"
import React from "react"

import Icon from '../icons/icon';
import {ICONS} from '../icons/constants';

import styles from './tabbar.module.scss';


const Tabbar = () => (
  <nav className={`${styles.tabbar} ${styles.hidden}`}>
    <Link to={"/"} activeClassName={styles.active} className={styles.home}>
      <Icon icon={ICONS.LOGO} />
      Home
    </Link>
    <Link to="/work/" activeClassName={styles.active} className={styles.work}>
      <Icon icon={ICONS.WORK} />
      Work
    </Link>
    <Link to="/about/" activeClassName={styles.active} className={styles.about}>
      <Icon icon={ICONS.ABOUT} />  
      About
    </Link>
    <Link to="/contact/" activeClassName={styles.active} className={styles.contact}>
      <Icon icon={ICONS.CONTACT} />
      Contact
    </Link>
  </nav>
)

export default Tabbar