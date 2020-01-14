import React from "react"
import { Link } from "gatsby"
import styles from './footer.module.scss';


const Footer = ({ siteTitle }) => (

    <footer className={`${styles.footer} section`}>
        <div className={styles.copyright}>
            © {new Date().getFullYear()}, Fabian Heussner{` `}
        </div>
        <div className={styles.spacer}></div>
        <nav className={styles.footerlinks}>
            <Link to="/imprint/">Imprint</Link>
            <a href="https://www.gatsbyjs.org">Mail me</a>
        </nav>
                
    </footer>

)

export default Footer