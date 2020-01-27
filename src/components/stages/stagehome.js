import React from "react"
import Button from '../button/button'

import illuContact from '../../images/illustration-home.svg'

import styles from './stagehome.module.scss';

const StageHome = props => {
    console.log(props)
    return (
  
        <section className={`${styles.stage} section`}>
            <div className={`${styles.stage__container} container`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__title} column is-5`}>
                        <h1 className={styles.pagetitle}>{props.pagetitle}</h1>
                        <span className={styles.subtitle}>{props.subtitle}</span>
                        <Button link="/about/" label="learn more" />
                    </div>
                    <div className={`${styles.stage__illustration} column is-6 is-offset-1`}>
                        <img src={illuContact} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default StageHome