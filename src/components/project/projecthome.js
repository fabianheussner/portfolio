import React from "react"
import { Link } from "gatsby"
// import ButtonSmall from "../button/buttonsmall"
import Fade from 'react-reveal/Fade'

import styles from './projecthome.module.scss';



const ProjectHome = props => {
    console.log(props)
    return (
        <section className={`${styles.projecthome} section`}>
            <div className="container">
                <div className={`${styles.project__columns} columns`}>
                    <div className="column is-4">
                        <div className={styles.description}>
                            <Fade duration="2000">
                                <div className={styles.client}>{props.client}</div>
                            </Fade>
                            <Fade bottom>
                                <h2 className={styles.projecttitle}>{props.projecttitle}</h2>
                                <div className={styles.subtitle}>{props.subtitle}</div>
                                <div className={styles.tags}>{props.tags}</div>
                                {/* <ButtonSmall link={props.link} label="View work" /> */}
                            </Fade>
                        </div>
                    </div>
                    <div className="column is-5 is-offset-3">
                        <Fade duration="2000">
                            <div className={styles.thumbnail}>
                                <Link to={props.link}>
                                    <img src={props.image} alt="" />
                                </Link>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProjectHome