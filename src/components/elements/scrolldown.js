import React from "react"

import styles from './scrolldown.module.scss';


const ScrollDown = () => (
    <div className={styles.scrolldown}>
        <h5 class={styles.label}>Latest projects</h5>
        <div className={styles.slider}>
            <div className={styles.line}></div>
            <div className={`${styles.subline} ${styles.inc}`}></div>
            <div className={`${styles.subline} ${styles.dec}`}></div>
        </div>
    </div>
)

export default ScrollDown