import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import myLogo from '../images/logo-dark.svg'

import Toggle from './sidebar/toggle'
import styles from './header.module.scss'

const Header = props => (
  <header className={styles.header}>
    <nav className={styles.header__navigation}>
      <div className={styles.header__logo}>
        <Link to="/"><img src={myLogo} alt="Logo Fabian Heußner" /></Link>
      </div>
      <div className={styles.spacer}></div>
      <div>
        <Toggle click={props.drawerClickHandler} />
      </div>
      {/* <div className={styles.header_navigationitems}>
        <ul>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/work/">Work</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      </div> */}
    </nav>
  </header>
)



export default Header
