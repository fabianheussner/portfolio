import React from 'react';

import styles from './toggle.module.scss';

const Toggle = props => (
    <button class={styles.togglebutton} onClick={props.click}>
        <div className={styles.togglebutton__line}></div>
        <div className={styles.togglebutton__line}></div>
        <div className={styles.togglebutton__line}></div>
    </button>
);

export default Toggle