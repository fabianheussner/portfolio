import React from 'react';
import { Link } from "gatsby"

import styles from './sidebar.scss'
import myLogo from '../../images/logo-dark.svg'

const Sidebar = props => {
    let drawerClasses = 'sidebar';
    if (props.show) {
        drawerClasses = 'sidebar open';
    }

    return (
        // <nav className={`${styles.sidebar} ${props.show ? styles.open : ''}`}>
        <nav className={drawerClasses}>
            {/* <div className="sidebar__logo">
                <Link to="/"><img src={myLogo} alt="Logo Fabian Heußner" /></Link>
            </div> */}

            <div className="internallinks">
                <ul>
                    <li><Link to="/work/">work</Link></li>
                    <li><Link to="/about/">that's me</Link></li>
                    <li><Link to="/contact/">contact</Link></li>
                </ul>
            </div>
            <div className="externallinks">
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Dribbble</a></li>
                    <li><a href="">Xing</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">E-mail</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar
