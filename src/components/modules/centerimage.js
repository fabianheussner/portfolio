import React from "react"
import Fade from 'react-reveal/Fade'
import styles from './centerimage.module.scss';

const CenterImage = props => {
    console.log(props)
    return (
        <div className={`${styles.centerimage} ${props.padding} section`} style={props.background}>
            <div className="container is-widescreen">
                <div className="columns">
                    <Fade>
                        <div className={`${styles.centerimage__columns} column`}>
                            <img src={props.image} alt="" />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )

}

export default CenterImage