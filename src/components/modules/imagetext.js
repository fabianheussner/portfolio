import React from "react"

import styles from './imagetext.module.scss';

const ImageText = props => {
    console.log(props)
    return (
        <section className={`${styles.imagetext} section`} style={props.colors}>
            <div class="container">
                <div class="columns">
                    <div class="column is-6">
                        <img src={props.image} alt="" />
                    </div>
                    <div class={`${styles.copywrapper} column is-5 is-offset-1`}>
                        <h3 className={styles.headline}>{props.headline}</h3>
                        <p>{props.copy}</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ImageText