import { Link } from "gatsby"
import React from "react"
import styles from './request.module.scss';

const Request = () => (
    <section className={styles.request}>
        <h3><a href="mailto:info@fabian-heussner.de?Subject=Hello%20again">Send</a> a request</h3>
    </section>
  )
  
export default Request