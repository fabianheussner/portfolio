import React from 'react'
import styles from './scrolldown.module.scss'
import Reveal from 'react-reveal/Reveal'





class ScrollDown extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            is_visible: true
        };
    }
    
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    
    // toggleVisibility() {
    //     if (window.pageYOffset > 50) {
    //         this.setState({
    //             is_visible: false
    //         });
    //     } else {
    //         this.setState({
    //             is_visible: true
    //         });
    //     }
    // }

    // My Code - Add / Remove Class Start
    toggleVisibility() {
        if (window.pageYOffset > 50) {
            document.getElementById('scrolldown-test').classList.add('test');
        } else {
            document.getElementById('scrolldown-test').classList.remove('test');
        }
    }
    // My Code - Add / Remove Class End
    
    render() {
        const { is_visible } = this.state;
        return (
            <div className="scrolldown__wrapper" id="scrolldown-test">
                {is_visible && (
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
                )}
            </div>
        );
    }
}
    

export default ScrollDown;