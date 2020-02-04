import React from "react"
import Message from '../elements/message'
import Button from '../button/button'
import ScrollDown from '../elements/scrolldown'

import illuHome from '../../images/illustrations/illustration-home.svg'

import styles from './stagehome.module.scss';
import Fade from 'react-reveal/Fade'

const StageHome = props => {
    console.log(props)
    return (
  
        <div className={`${styles.stage} section`}>
            <div className={`${styles.stage__container} container`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__title} column is-5`}>
                        <Fade duration="1600">
                            <Message />
                        </Fade>
                        <Fade>
                            <span className={styles.subtitle}>
                                I have a passion for building highly-polished user interfaces and enjoy illustrating a lot. <span className={styles.supplement}>Experienced with clients using #FF6600!</span>
                            </span>
                        </Fade>
                        <Fade bottom>
                            <Button link="/about/" label="learn more" />
                        </Fade>
                    </div>
                    <div className={`${styles.stage__illustration} column is-5 is-offset-2`}>
                        <Fade duration="2400">
                            <img src={illuHome} alt="" />
                        </Fade>
                    </div>
                </div>
                <ScrollDown />
            </div>
        </div>

    )
}

export default StageHome