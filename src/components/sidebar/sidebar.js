import React, { useEffect } from 'react';
import { Link } from "gatsby"

import styles from './sidebar.module.scss'


const Links = [
    {
        to: "/work/",
        text: "work"
    },
    {
        to: "/about/",
        text: "about me"
    },
    {
        to: "/contact/",
        text: "contact"
    },
];

const Sidebar = props => {

    useEffect(() => {
        const htmlElement = document.querySelector('HTML');
        if (!htmlElement) return;

        const { show } = props;
        if (show) {
            htmlElement.classList.add('noScroll');
        } else {
            htmlElement.classList.remove('noScroll');
        }
    });

    const linkBinds = {
        activeClassName: styles.active,
        onClick: props.onClose
    };


    return (


        <nav className={`${styles.sidebar} ${props.show ? styles.open : ''}`}>
            <div className={styles.internallinks}>
                <ul>
                    {Links.map(({ to, text }, i) => (
                        <li key={i}>
                            <Link to={to} {...linkBinds}>{text}</Link>
                        </li>
                    )
                    )}
                </ul>
            </div>
            <div className={styles.externallinks}>
                <ul>
                    {/* <li><a href="https://www.instagram.com/fabianheussner/" target="_blank" without rel="noopener noreferrer">Instagram.</a></li> */}
                    <li><a href="https://dribbble.com/FabianH" target="_blank" without rel="noopener noreferrer">Dribbble.</a></li>
                    <li><a href="https://www.xing.com/profile/Fabian_Heussner/cv" target="_blank" without rel="noopener noreferrer">Xing.</a></li>
                    <li><a href="https://www.linkedin.com/in/fabian-heussner-91a0a5104/" target="_blank" without rel="noopener noreferrer">Linkedin.</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar

