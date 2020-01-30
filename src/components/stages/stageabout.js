import React from "react"

import illuAbout from '../../images/illustrations/illustration-about-me.svg'

import styles from './stageabout.module.scss';

const StageAbout = props => {
    console.log(props)
    return (
  
        <section className={`${styles.stage} section`}>
            <div className={`${styles.stage__container} container`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__title} column is-5`}>
                        <h1 className={styles.pagetitle}>{props.pagetitle}</h1>
                        <span className={styles.subtitle}>{props.subtitle}</span>
                    </div>
                    <div className={`${styles.stage__illustration} column is-5 is-offset-2`}>
                        <img src={illuAbout} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default StageAbout