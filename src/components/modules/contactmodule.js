import React from "react"
import styles from './contactmodule.module.scss';

const ContactModule = () => (
    <div className={`${styles.contactlinks} section`}>
        <div className="container">
            <div className={styles.address}>
                <h5 class={styles.label}>Located</h5>
                <p>
                    Leverkusenstraße 8<br />
                    22761 Hamburg
                </p>
            </div>
            <div className={styles.contact}>
                <h5 class={styles.label}>Get in touch</h5>
                <p>
                    <a href="mailto:info@fabian-heussner.de?Subject=Hello%20again">info@fabian-heussner.de</a><br />
                    (+49) 151 - 11 67 9290
                </p>            
            </div>
            <div className={styles.socialmedia}>
                <h5 class={styles.label}>Follow me</h5>
                <ul>
                    <li><a href="https://www.facebook.com/">Instagram</a></li>
                    <li><a href="https://www.facebook.com/">Dribbble</a></li>
                    <li><a href="https://www.facebook.com/">Xing</a></li>
                    <li><a href="https://www.facebook.com/">Linkedin</a></li>
                    <li><a href="https://www.facebook.com/">Das Auge</a></li>
                </ul> 
            </div>
        </div>
    </div>
  )
  
export default ContactModule
