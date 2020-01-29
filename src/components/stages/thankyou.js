import React from "react"

import illuError from '../../images/illustrations/illustration-thankyou.svg'
import Button from '../button/button'

import styles from './thankyou.module.scss';

const ThankYou = props => {
    console.log(props)
    return (
  
        <section className={`${styles.stage} section`}>
            <div className={`${styles.stage__container} container`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__illustration} column is-4 is-offset-1`}>
                        <img src={illuError} alt="" />
                    </div>
                    <div className={`${styles.stage__title} column is-4 is-offset-2`}>
                        <h1 className={styles.pagetitle}>thank's</h1>
                        <span className={styles.subtitle}>
                            I'm looking forward to read your request and will answer as fast as possible. Stay tuned.    
                        </span>
                        <Button label="Take me Home" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ThankYou