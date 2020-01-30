import React from 'react'
import styles from './table.module.scss';

const Table = props => {
    console.log(props)
    return (
        <div className="section">
            <div className="container">
                
                <div className={styles.table}>
                    <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                        <p>
                            Test Cell 1
                        </p>
                    </div>
                    <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                        Test Cell 2
                    </div>
                    <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                        Test Cell 3
                    </div> 
                    <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                        Test Cell 4
                    </div>
                    <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                        Test Cell 5
                    </div>
                    <div className={`${styles.cell} ${props.width} ${styles.row3}`}>
                        Test Cell 6
                    </div>
                </div>
                
            </div>
        </div>
    )
} 


export default Table