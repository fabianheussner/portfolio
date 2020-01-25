import React from "react"
import Button from "../button"

import styles from './projecthome.module.scss';



const ProjectHome = props => {
    console.log(props)
    return (
        <section className={`${styles.projecthome} section`}>
            <div class="container">
                <div class="columns">
                    <div class="column is-4">
                        <div className={styles.description}>
                            <div className={styles.client}>{props.client}</div>
                            <h2 className={styles.projecttitle}>{props.projecttitle}</h2>
                            <div className={styles.subtitle}>{props.subtitle}</div>
                            <div className={styles.tags}>{props.tags}</div>
                            <Button link="/osramdocs/" label="See project" />
                        </div>
                    </div>
                    <div class="column is-5 is-offset-3">
                        <div className={styles.thumbnail}>
                            <img src={props.image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProjectHome