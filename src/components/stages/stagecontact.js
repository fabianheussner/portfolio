import React from "react"
import ContactForm from '../form/contactform'
import Fade from 'react-reveal/Fade'
import illuContact from '../../images/illustrations/illustration-contact.svg'

import styles from './stagecontact.module.scss';

const StageContact = props => {
    console.log(props)
    return (
  
        <section className={`${styles.stage} section`}>
            <div className={`${styles.stage__container} container`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__title} column is-5`}>
                        <Fade duration="1600">
                            <h1 className={styles.pagetitle}>{props.pagetitle}</h1>
                            <span className={styles.subtitle}>{props.subtitle}</span>
                        </Fade>
                        <ContactForm />
                    </div>
                    <div className={`${styles.stage__illustration} column is-5 is-offset-2`}>
                        <Fade duration="1600">
                            <img src={illuContact} alt="" />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default StageContact