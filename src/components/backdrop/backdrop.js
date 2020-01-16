import React from 'react';
import styles from './backdrop.module.scss'

const Backdrop = props => (
    <div className={styles.backdrop} onClick={props.click} onKeyDown={props.click} role="button" tabIndex="0"></div>
)

export default Backdrop