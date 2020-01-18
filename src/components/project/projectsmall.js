import React from "react"
import { Link } from "gatsby"

import styles from './projectsmall.module.scss';

import projectThumbnail from '../../images/placeholder.webp'

const ProjectSmall = props => {
    console.log(props)
    return (
        <div className={styles.projectsmall}>
            <Link to="/">
                <div className={styles.thumbnail}>
                    <img src={projectThumbnail} alt="" />
                </div>
                <div className={styles.description}>
                    <div className={styles.client}>{props.client}</div>
                    <h2 className={styles.projecttitle}>{props.projecttitle}</h2>
                    <div className={styles.tags}>{props.tags}</div>
                </div>
            </Link>
        </div>
    )

}

export default ProjectSmall