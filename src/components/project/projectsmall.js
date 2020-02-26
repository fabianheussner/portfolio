import React from "react"
import { Link } from "gatsby"
import styles from './projectsmall.module.scss';
import Fade from 'react-reveal/Fade'


const ProjectSmall = props => {
    console.log(props)
    return (
        
        <div className={`${styles.projectsmall} project-small column is-5-desktop is-6-tablet ${props.offset}`}>
            <Link to={props.link}>
                <Fade>
                    <div className={styles.thumbnail} style={props.background}>
                        <img src={props.featuredImage} alt="" />
                    </div>
                    <div className={styles.description}>
                        <div className={styles.project__description}>
                            {props.projectTags}<hr></hr>{props.projectClient}
                        </div>
                        <h2 className={styles.projecttitle}>{props.projectTitle}</h2>
                    </div>
                </Fade>
            </Link>
        </div>
    )

}

export default ProjectSmall