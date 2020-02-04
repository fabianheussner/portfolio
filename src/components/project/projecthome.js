import React from "react"
import { Link } from "gatsby"
// import ButtonSmall from "../button/buttonsmall"
import Fade from 'react-reveal/Fade'

import styles from './projecthome.module.scss';



const ProjectHome = props => {
    console.log(props)
    return (
        <section className={`${styles.projecthome} section`}>
            <div className="container is-widescreen">
                <div className={`${styles.project__columns} columns`}>
                    <div className="column is-4-desktop is-6-tablet">
                        <div className={styles.description}>
                            <Link to={props.link}>
                                <Fade bottom>
                                    <div className={styles.project__description}>
                                        <span className={styles.tags}>{props.projectTags}</span><hr></hr>{props.projectClient}
                                    </div>
                                </Fade>
                                <Fade bottom delay={1000}>
                                    <h2 className={styles.projecttitle}>{props.projectTitle}</h2>
                                </Fade>
                                <Fade bottom>
                                    <h2 className={styles.subtitle}>{props.subtitle}</h2>
                                </Fade>
                            </Link>
                        </div>
                    </div>
                    <div className="column is-5-desktop is-offset-3-desktop is-tablet-6">
                        <Link to={props.link}>
                            <Fade duration="2000">
                                <div className={styles.thumbnail}>
                                        <img src={props.image} alt="" />
                                </div>
                            </Fade>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProjectHome