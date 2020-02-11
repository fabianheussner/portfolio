import React from "react"
import Fade from 'react-reveal/Fade'
import styles from './image-3.module.scss';

const Image3 = props => {
    console.log(props)
    return (
        <section className={`${styles.image3} section`} style={props.background}>
            <div className="container is-widescreen">
                <div className="columns">
                    <Fade>
                        <div className={`${styles.image3__columns} column is-4-desktop is-4-tablet`}>
                            <img src={props.image1} alt="" />
                        </div>
                        <div className={`${styles.image3__columns} column is-4-desktop is-4-tablet`}>
                            <img src={props.image2} alt="" />
                        </div>
                        <div className={`${styles.image3__columns} column is-4-desktop is-4-tablet`}>
                            <img src={props.image3} alt="" />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )

}

export default Image3