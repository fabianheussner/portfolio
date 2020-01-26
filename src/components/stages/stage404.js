import React from "react"

import illuError from '../../images/illustration-404.svg'
import Button from '../button/button'

import styles from './stage404.module.scss';

const StageError = props => {
    console.log(props)
    return (
  
        <section className={`${styles.stage} section`}>
            <div className={`${styles.stage__container} container`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__title} column is-5`}>
                        <h1 className={styles.pagetitle}>Oh shit.</h1>
                        <span className={styles.subtitle}>
                            Apperently this page took the day off. Take a look at the beautiful illustration nearby or click on the link to get redirected to my homepage.    
                        </span>
                        <Button label="Take me Home" />
                    </div>
                    <div className={`${styles.stage__illustration} column is-6 is-offset-1`}>
                        <img src={illuError} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default StageError