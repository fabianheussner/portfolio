import React from "react"
import styles from './request.module.scss'
import Fade from 'react-reveal/Fade'

const Request = () => (
    <section className={`${styles.request} section`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.copy}>
            <Fade>
              <h4 className={styles.question}>interested?</h4>
            </Fade>
            <Fade bottom>
              <h5 className={styles.contactlink}>let's <a href="mailto:info@fabian-heussner.de?Subject=Hello%20again">talk.</a></h5>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
  
export default Request