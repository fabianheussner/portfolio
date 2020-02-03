import React from "react"
import styles from './scrolldown.module.scss'
import Fade from 'react-reveal/Fade'


const ScrollDown = () => (
    <div className={styles.scrolldown}>
        <Fade>
            <h5 className={styles.label}>Latest projects</h5>
            <div className={styles.slider}>
                <div className={styles.line}></div>
                <div className={`${styles.subline} ${styles.inc}`}></div>
                <div className={`${styles.subline} ${styles.dec}`}></div>
            </div>
        </Fade>
    </div>
)

export default ScrollDown