import React from "react"
import { Link } from "gatsby"
import Icon from '../icons/icon'
import {ICONS} from '../icons/constants'
import styles from './pagination.module.scss';

const Pagination = props => {
    console.log(props)
    return (
        <section className={`${styles.pagination} section`}>
            <div className={`${styles.pagination__links} container`}>
                <div className={styles.previous}>
                    <Link><Icon icon={ICONS.ARROW_LEFT} />Previous</Link>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.next}>
                    <Link>Next<Icon icon={ICONS.ARROW_RIGHT} /></Link>
                </div>
            </div>
        </section>
    )

}

export default Pagination