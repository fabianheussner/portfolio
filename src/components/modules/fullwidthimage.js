import React from 'react'
import styles from './fullwidthimage.module.scss';

const FullWidthImage = props => {
    console.log(props)
    return (
        <section className={styles.fullwidthimage}>
            <img src={props.image} alt={props.alttext} />
        </section>
    )

}

export default FullWidthImage