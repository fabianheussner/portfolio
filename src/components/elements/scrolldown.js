import React from 'react'
import styles from './scrolldown.module.scss'
import Reveal from 'react-reveal/Reveal'
// import { hydrate } from 'react-dom'


class ScrollDown extends React.Component  {

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }
    
    toggleVisibility() {
        var doesExist = document.getElementById('scrolldown-test');
        if ( window.pageYOffset > 100 && doesExist ) {
            doesExist.classList.add('test');
        } else if ( window.pageYOffset < 100 && doesExist ) {
            doesExist.classList.remove('test');
        } else {
            return null;
        }
    }
    
    render() {
        return (
            <div className="scrolldown__wrapper" id="scrolldown-test">
                    <div className={styles.scrolldown}>
                        <Reveal effect="fadeInUp" effectOut="pulse">
                            <h5 className={styles.label}>Latest projects</h5>
                            <div className={styles.slider}>
                                <div className={styles.line}></div>
                                <div className={`${styles.subline} ${styles.inc}`}></div>
                                <div className={`${styles.subline} ${styles.dec}`}></div>
                            </div>
                        </Reveal>
                    </div>
            </div>
        );
    }
}
    

export default ScrollDown;