import React from "react"
import Fade from 'react-reveal/Fade'
import styles from './image-2.module.scss';

const Image3 = props => {
    console.log(props)
    return (
        <section className={`${styles.image2} ${props.padding} section`} style={props.background}>
            <div className="container is-widescreen">
                <div className="columns">
                    <Fade>
                        <div className={`${styles.image2__columns} column ${props.width1}`}>
                            <img src={props.image1} alt="" />
                        </div>
                        <div className={`${styles.image2__columns} column ${props.width2}`}>
                            <img src={props.image2} alt="" />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )

}

export default Image3