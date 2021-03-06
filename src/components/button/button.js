import React from "react"
import { Link } from "gatsby"

import Icon from '../icons/icon';
import {ICONS} from '../icons/constants';

import styles from './button.module.scss';

const Button = props => {
  console.log(props)
    return (
      <Link to={props.link} className={styles.button}>
        <Icon icon={ICONS.ARROW_RIGHT} />
        {props.label}
      </Link>
    )
}
  
export default Button