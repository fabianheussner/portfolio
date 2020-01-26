import React from "react"

import selectedClients from '../../images/selected-clients.webp'
import styles from './clients.module.scss';

const Clients = props => {
    console.log(props)
    return (
        <div className={styles.clients}>
            <h5 class={styles.label}>Selected clients</h5>
            <img src={selectedClients} alt=""/>
        </div>
    )

}

export default Clients