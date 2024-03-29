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
            <div className={`${styles.stage__container} container is-widescreen`}>
                <div className={`${styles.stage__columns} columns`}>
                    <div className={`${styles.stage__title} column is-5-desktop is-6-tablet`}>
                        <Fade duration="1600">
                            <Message />
                        </Fade>
                        <Fade>
                            <span className={styles.subtitle}>
                                I am a Digital Product Designer with a passion for creating highly polished UIs and flawless UX. 
                                Digging through code satisfies me as much as turning a Minimum Viable into a Minimum Lovable Product. 
                            </span>
                        </Fade>
                        <Fade bottom>
                            <Button link="/about/" label="learn more" />
                        </Fade>
                    </div>
                    <div className={`${styles.stage__illustration} column is-5-desktop is-offset-2-desktop is-6-tablet`}>
                        <Fade duration="2400">
                            <img src={illuHome} alt="" />
                        </Fade>
                    </div>
                </div>
                <div className={styles.scrolldown__position}>
                    <ScrollDown />
                </div>
            </div>
        </div>

    )
}

export default StageHome
