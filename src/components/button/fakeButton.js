import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import Icon from '../icons/icon';
import {ICONS} from '../icons/constants';
import styles from './fakeButton.module.scss';

const FakeButton = props => {
  console.log(props)
    return (
      // <a href={props.link} className={styles.button}>
      //   <Icon icon={ICONS.ARROW_RIGHT} />
      //   {props.label}
      // </a>
      <button className={styles.button} onClick={() => scrollTo(`${props.link}`)}>
        <Icon icon={ICONS.ARROW_RIGHT} />
        {props.label}
      </button>
    )
}
  
export default FakeButton