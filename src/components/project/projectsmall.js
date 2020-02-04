import React from "react"
import { Link } from "gatsby"
import styles from './projectsmall.module.scss';
import Fade from 'react-reveal/Fade'


const ProjectSmall = props => {
    console.log(props)
    return (
        
        <div className={`${styles.projectsmall} project-small column is-5 ${props.offset}`}>
            <Link to={props.link}>
                <div className={styles.thumbnail}>
                    <Fade delay="400" duration="1400">
                        <img src={props.featuredImage} alt="" />
                    </Fade>
                </div>
                <div className={styles.description}>
                    <Fade bottom delay="500">
                        <div className={styles.project__description}>
                            {props.projectTags}<hr></hr>{props.projectClient}
                        </div>
                        <h2 className={styles.projecttitle}>{props.projectTitle}</h2>
                    </Fade>
                </div>
            </Link>
        </div>
    )

}

export default ProjectSmall