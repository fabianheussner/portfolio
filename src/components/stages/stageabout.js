import React from "react"
import FakeButton from '../button/fakeButton'
import Fade from 'react-reveal/Fade'
import illuAbout from '../../images/illustrations/illustration-about-me.svg'

import styles from './stageabout.module.scss';

const StageAbout = props => {
    console.log(props)
    return (
  
        <section className={`${styles.stage} section`}>
            <div className={`${styles.stage__container} container`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__title} column is-5`}>
                        <Fade>
                            <h1 className={styles.pagetitle}>{props.pagetitle}</h1>
                            <span className={styles.subtitle}>{props.subtitle}</span>
                        </Fade>
                        <Fade bottom>
                            <FakeButton 
                                link="#furtherinfo"
                                label="learn more"
                            />
                        </Fade>
                    </div>
                    <div className={`${styles.stage__illustration} column is-5 is-offset-2`}>
                        <Fade>
                            <img src={illuAbout} alt="" />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default StageAbout