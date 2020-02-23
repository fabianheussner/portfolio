import React from "react"
import Fade from 'react-reveal/Fade'
import styles from './centertext.module.scss';

const CenterText = props => {
    console.log(props)
    return (
        <section className={`${styles.centertext} section`}>
            <div className="container is-widescreen">
                <div className="columns">
                    <Fade>
                        <div className="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet">
                            <p>{props.copy}</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )

}

export default CenterText