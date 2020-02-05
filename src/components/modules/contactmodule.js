import React from "react"
import styles from './contactmodule.module.scss';
import Fade from 'react-reveal/Fade'

const ContactModule = () => (
    <div className={`${styles.contactlinks} section`}>
        <div className="container">
            <div className="columns is-widescreen">
                <Fade>
                    <div className={`${styles.contactlinks__column} column`}>
                        <div className={styles.contact}>
                            <h5 className={styles.label}>Get in touch</h5>
                            <a href="mailto:info@fabian-heussner.de?Subject=Hello%20again">info@fabian-heussner.de</a><br />           
                        </div>
                    </div>
                    <div className={`${styles.contactlinks__column} column`}>
                        <div className={styles.socialmedia}>
                            <h5 className={styles.label}>Follow me on</h5>
                            <ul>
                                <li><a href="https://www.facebook.com/">Instagram.</a></li>
                                <li><a href="https://www.facebook.com/">Dribbble.</a></li>
                                <li><a href="https://www.facebook.com/">Xing.</a></li>
                                <li><a href="https://www.facebook.com/">Linkedin.</a></li>
                            </ul> 
                        </div>       
                    </div>
                </Fade>
            </div>
        </div>
    </div>
  )
  
export default ContactModule
