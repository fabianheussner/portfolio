import React from "react"
import { Link } from "gatsby"
import styles from './footer.module.scss';


const Footer = () => (

    <footer className={`${styles.footer} section`}>
        <div className={`${styles.container} container`}>
            <div className={styles.copyright}>
                © {new Date().getFullYear()}, Fabian Heussner{` `}
            </div>
            <div className={styles.spacer}></div>
            <nav className={styles.footerlinks}>
                <Link to="/imprint/">Imprint</Link>
            </nav>
        </div>  
    </footer>

)

export default Footer