import React from "react"
import styles from './fullpage.module.scss'

import StageHome from "../stages/stagehome"
import ProjectHome from "../project/projecthome"

import docsFeatured from '../../images/project-docs/osram-docs-featured.webp'

const FullPage = props => (
    <div className={styles.snapcontainer}>
        <section className={styles.section}>
            <StageHome />
        </section>
        <section className={styles.section}>
            <ProjectHome
            image={docsFeatured} 
            client="Osram" 
            projecttitle="lightelligence docs" 
            subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
            tags="UI UX Concept Illustration" />
        </section>
        <section className={styles.section}>
            <ProjectHome
            image={docsFeatured} 
            client="Osram" 
            projecttitle="lightelligence docs" 
            subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
            tags="UI UX Concept Illustration" />
        </section>
    </div>
)


export default FullPage