import React from 'react';
import { Link } from "gatsby"

import styles from './sidebar.module.scss'

const Sidebar = props => {

    return (
        <nav className={`${styles.sidebar} ${props.show ? styles.open : ''}`}>
            <div className={styles.internallinks}>
                <ul>
                    <li><Link to="/work/">work</Link></li>
                    <li><Link to="/about/">that's me</Link></li>
                    <li><Link to="/contact/">contact</Link></li>
                </ul>
            </div>
            <div className={styles.externallinks}>
                <ul>
                    <li><a href="https://www.facebook.com/">Instagram</a></li>
                    <li><a href="https://www.facebook.com/">Dribbble</a></li>
                    <li><a href="https://www.facebook.com/">Xing</a></li>
                    <li><a href="https://www.facebook.com/">Linkedin</a></li>
                    <li><a href="https://www.facebook.com/">E-mail</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar

