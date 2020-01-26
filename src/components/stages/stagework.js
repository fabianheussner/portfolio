import React from "react"
import styles from './stagework.module.scss';

import Button from '../button/button'

const StageWork = props => {
    console.log(props)
    return (
  
        <section className={`${styles.stage} section`}>
            <div className={`${styles.stage__container} container`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__title} column is-6`}>
                        <h1 className={styles.pagetitle}>{props.pagetitle}</h1>
                        <span className={styles.subtitle}>{props.subtitle}</span>
                        <Button link="/about/" label="learn more" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default StageWork