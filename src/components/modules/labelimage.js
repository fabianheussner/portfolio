import React from 'react'
import styles from './labelimage.module.scss'

const LabelImage = props => {
    console.log(props)
    return (
        <div className={styles.clients}>
            <h5 class={styles.label}>Selected clients</h5>
            <img src={props.image} alt=""/>
        </div>
    )

}

export default LabelImage