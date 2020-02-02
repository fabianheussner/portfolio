import React from "react"
import styles from './credits.module.scss';

const Credits = props => {
    console.log(props)
    return (
        <section className={`${styles.credits} section`}>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className={styles.label}>
                            <h5 className="label">{props.label}</h5>
                        </div>
                    </div>
                    <div className={`${styles.members} column`}>
                        <span><a href="https://www.facebook.com/">Timon Hass</a></span>
                        <span>Svenja Eggers</span>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Credits