import React from "react"

import styles from './intro.module.scss';

const Intro = props => {
    console.log(props)
    return (
        <section className={`${styles.intro} section`}>
            <div className="container">
                <div className="columns">
                    <div className="column is-6 is-offset-6">
                        <div className={styles.description}>
                            <div className={styles.client}>{props.client}</div>
                            <h2 className={styles.projecttitle}>{props.projecttitle}</h2>
                            <div className={styles.subtitle}>{props.subtitle}</div>
                            <div className={styles.tags}>{props.tags}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Intro