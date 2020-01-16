import React from "react"

import styles from './labeltext.module.scss';

const LabelText = props => {
    console.log(props)
    return (
        <section className={`${styles.labeltext} section`}>
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div className={styles.label}>
                            <h5 class="label">{props.label}</h5>
                        </div>
                    </div>
                    <div class="column">
                        <h3 className={styles.headline}>{props.headline}</h3>
                        <p>{props.copy}</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default LabelText