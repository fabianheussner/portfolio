import React from 'react';

import styles from './toggle.module.scss';

const Toggle = props => (
    // <button className={styles.togglebutton} onClick={props.click}>
    //     <div className={styles.togglebutton__line}></div>
    //     <div className={styles.togglebutton__line}></div>
    //     <div className={styles.togglebutton__line}></div>
    // </button>
    <div className={styles.togglebutton} onClick={props.click}>
        <div className={styles.togglebutton__line}></div>
        <div className={styles.togglebutton__line}></div>
        {/* <div className={styles.togglebutton__line}></div> */}
    </div>
);

export default Toggle