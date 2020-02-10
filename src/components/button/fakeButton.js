import React from "react"
import Icon from '../icons/icon';
import {ICONS} from '../icons/constants';
import styles from './button.module.scss';

const FakeButton = props => {
  console.log(props)
    return (
      <a href={props.link} className={styles.button}>
        <Icon icon={ICONS.ARROW_RIGHT} />
        {props.label}
      </a>
    )
}
  
export default FakeButton