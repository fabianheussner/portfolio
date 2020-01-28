import React from "react"
import { Link } from "gatsby"

import styles from './buttonsmall.module.scss';

const Button = props => {
  console.log(props)
    return (
      <Link to={props.link} className={styles.button}>
        {props.label}
      </Link>
    )
}
  
export default Button