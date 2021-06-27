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
                                {/* <li><a href="https://www.instagram.com/fabianheussner/" target="_blank" without rel="noopener noreferrer">Instagram.</a></li> */}
                                <li><a href="https://dribbble.com/FabianH" target="_blank" without rel="noopener noreferrer">Dribbble.</a></li>
                                <li><a href="https://www.xing.com/profile/Fabian_Heussner/cv" target="_blank" without rel="noopener noreferrer">Xing.</a></li>
                                <li><a href="https://www.linkedin.com/in/fabian-heussner-91a0a5104/" target="_blank" without rel="noopener noreferrer">Linkedin.</a></li>
                            </ul> 
                        </div>       
                    </div>
                </Fade>
            </div>
        </div>
    </div>
  )
  
export default ContactModule
