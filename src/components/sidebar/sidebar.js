import React from 'react';
import { Link } from "gatsby"

import styles from './sidebar.module.scss'

const Sidebar = props => {
    const htmlElement = document.querySelector('HTML');
    return (
        <nav className={`${styles.sidebar} ${props.show ? styles.open : ''}`}>
            <div className={styles.internallinks}>
                <ul>
                    <li><Link to="/work/" activeClassName={styles.active} onClick={htmlElement.classList.remove('noScroll')}>work</Link></li>
                    <li><Link to="/about/" activeClassName={styles.active}>about me</Link></li>
                    <li><Link to="/contact/" activeClassName={styles.active}>contact</Link></li>
                </ul>
            </div>
            <div className={styles.externallinks}>
                <ul>
                    <li><a href="https://www.instagram.com/fabianheussner/" target="_blank" without rel="noopener noreferrer">Instagram.</a></li>
                    <li><a href="https://dribbble.com/FabianH" target="_blank" without rel="noopener noreferrer">Dribbble.</a></li>
                    <li><a href="https://www.xing.com/profile/Fabian_Heussner/cv" target="_blank" without rel="noopener noreferrer">Xing.</a></li>
                    <li><a href="https://www.linkedin.com/in/fabian-heussner-91a0a5104/" target="_blank" without rel="noopener noreferrer">Linkedin.</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar

