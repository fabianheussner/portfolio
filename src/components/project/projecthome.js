import React from "react"
import { Link } from "gatsby"
import ButtonSmall from "../button/buttonsmall"

import styles from './projecthome.module.scss';



const ProjectHome = props => {
    console.log(props)
    return (
        <section className={`${styles.projecthome} section`}>
            <div class="container">
                <div class={`${styles.project__columns} columns`}>
                    <div class="column is-4">
                        <div className={styles.description}>
                            <div className={styles.client}>{props.client}</div>
                            <h2 className={styles.projecttitle}>{props.projecttitle}</h2>
                            <div className={styles.subtitle}>{props.subtitle}</div>
                            <div className={styles.tags}>{props.tags}</div>
                            <ButtonSmall link={props.link} label="See project" />
                        </div>
                    </div>
                    <div class="column is-5 is-offset-3">
                        <div className={styles.thumbnail}>
                            <Link to={props.link}>
                                <img src={props.image} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProjectHome