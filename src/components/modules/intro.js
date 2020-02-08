import React from "react"
import Fade from 'react-reveal/Fade'
import styles from './intro.module.scss';

const Intro = props => {
    console.log(props)
    return (
        <section className={`${styles.intro} section`}>
            <div className="container is-widescreen">
                <div className="columns">
                    <div className="column is-6-desktop is-offset-6-desktop">
                        <div className={styles.description}>
                            <Fade bottom>    
                                <div className={styles.client}>{props.client}</div>
                                <h2 className={styles.projecttitle}>{props.projecttitle}</h2>
                                <div className={styles.subtitle}>{props.subtitle}</div>
                                <div className={styles.tags}>{props.tags}</div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Intro