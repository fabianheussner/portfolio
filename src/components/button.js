import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from './button.module.scss';

const Button = props => {
  console.log(props)
    return <Link to={props.link} className={styles.button}>{props.label}</Link>
}

  
export default Button