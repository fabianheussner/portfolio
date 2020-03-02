import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './fullwidthimage.module.scss';

const FullWidthImage = props => {
    console.log(props)
    return (
        <div className={`${styles.fullwidthimage__container} container is-fluid`}>
            <div className={styles.fullwidthimage}>
                <Fade>
                    <img src={props.image} alt={props.alttext} />
                </Fade>
            </div>
        </div>
    )

}

export default FullWidthImage