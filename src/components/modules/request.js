import React from "react"
import styles from './request.module.scss';

const Request = () => (
    <section className={`${styles.request} section`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.copy}>
            <h4 className={styles.question}>interested?</h4>
            <h5 className={styles.contactlink}>let's <a href="mailto:info@fabian-heussner.de?Subject=Hello%20again">talk.</a></h5>
          </div>
        </div>
      </div>
    </section>
  )
  
export default Request