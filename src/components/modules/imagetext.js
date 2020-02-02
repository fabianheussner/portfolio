import React from "react"

import styles from './imagetext.module.scss';

const ImageText = props => {
    console.log(props)
    return (
        <section className={`${styles.imagetext} section`} style={props.colors}>
            <div className="container">
                <div className="columns">
                    <div className="column is-6">
                        <img src={props.image} alt="" />
                    </div>
                    <div className={`${styles.copywrapper} column is-5 is-offset-1`}>
                        <h3 className={styles.headline}>{props.headline}</h3>
                        <p>{props.copy}</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ImageText