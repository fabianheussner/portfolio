import React from 'react'
import styles from './table-small.module.scss'
import Fade from 'react-reveal/Fade'
import {
    clientMigros,
    clientOsram,
    clientOtelo,
    clientBMG,
    clientSchwarzkopf,
    clientSwatch,
} from '../../images/clients'

const TableSmall = props => {
    console.log(props)
    return (
        <div className="section">
            <div className="container is-widescreen">
                <Fade>
                    <h5 className={styles.label}>Selected clients</h5>
                    <div className={styles.table}>
                        <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                            <img src={clientOtelo} alt="Logo Otelo"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                            <img src={clientBMG} alt="Logo Bundesministerium für Gesundheit"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                            <img src={clientMigros} alt="Logo Migros"/>
                        </div> 
                        <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                            <img src={clientOsram} alt="Logo Osram"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                            <img src={clientSchwarzkopf} alt="Logo Schwarzkopf"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                            <img src={clientSwatch} alt="Logo Swatch"/>
                        </div>
                    </div>
                </Fade>        
            </div>
        </div>
    )
} 


export default TableSmall