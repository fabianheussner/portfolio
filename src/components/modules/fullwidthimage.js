import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './fullwidthimage.module.scss';

const FullWidthImage = props => {
    console.log(props)
    return (
        <section className={styles.fullwidthimage}>
            <Fade duration="1500">
                <img src={props.image} alt={props.alttext} />
            </Fade>
        </section>
    )

}

export default FullWidthImage