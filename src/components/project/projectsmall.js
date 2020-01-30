import React from "react"
import { Link } from "gatsby"
import styles from './projectsmall.module.scss';


const ProjectSmall = props => {
    console.log(props)
    return (
        <div className={`${styles.projectsmall} project-small column is-5 ${props.offset}`}>
            <Link to={props.link}>
                <div className={styles.thumbnail}>
                    <img src={props.featuredImage} alt="" />
                </div>
                <div className={styles.description}>
                    <div className={styles.tags}>{props.projectTags}</div>
                    <h2 className={styles.projecttitle}>{props.projectTitle}</h2>
                </div>
            </Link>
        </div>
    )

}

export default ProjectSmall