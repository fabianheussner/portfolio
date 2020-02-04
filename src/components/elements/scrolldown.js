import React from "react"
import styles from './scrolldown.module.scss'
import Fade from 'react-reveal/Fade'
// import Reveal from 'react-reveal/Reveal'


const ScrollDown = () => (
    <div className={styles.scrolldown}>
        <Fade>
        {/* <Reveal effect="rotateIn" effectOut="rotateOut" delayOut={100}> */}
            <h5 className={styles.label}>Latest projects</h5>
            <div className={styles.slider}>
                <div className={styles.line}></div>
                <div className={`${styles.subline} ${styles.inc}`}></div>
                <div className={`${styles.subline} ${styles.dec}`}></div>
            </div>
        {/* </Reveal> */}
        </Fade>
    </div>
)

export default ScrollDown