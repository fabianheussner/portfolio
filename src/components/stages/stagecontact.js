import React from "react"

import illuContact from '../../images/illustration-home.svg'

import styles from './stagecontact.module.scss';

const StageContact = props => {
    console.log(props)
    return (
  
        <section className={`${styles.stage} section`}>
            <div className={`${styles.stage__container} container`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__title} column is-5`}>
                        <h1 className={styles.pagetitle}>{props.pagetitle}</h1>
                        <span className={styles.subtitle}>{props.subtitle}</span>
                        <div className={styles.address}>
                            <h5 class={styles.label}>{props.label}</h5>
                            <p>
                                Fabian Heußner<br />
                                Leverkusenstraße 8<br />
                                22761 Hamburg
                            </p>
                            <p>
                                <a href="mailto:info@fabian-heussner.de?Subject=Hello%20again">info@fabian-heussner.de</a><br />
                                (+49) 151 - 11 67 9290
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.stage__illustration} column is-6 is-offset-1`}>
                        <img src={illuContact} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default StageContact