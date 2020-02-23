import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './fullwidthimage.module.scss';

const FullWidthImage = props => {
    console.log(props)
    return (
        <div className={styles.fullwidthimage}>
            <Fade duration={2000}>
                <img src={props.image} alt={props.alttext} />
            </Fade>
        </div>
    )

}

export default FullWidthImage