import React from 'react'
import Icon from '../icons/icon'
import {ICONS} from '../icons/constants'
import styles from './contactform.module.scss'
import Fade from 'react-reveal/Fade'

const ContactForm = () => (
  <div className={styles.contactform}>
    <form
      name="request-form"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="request-form" />

        <Fade bottom>
          <div className={styles.formgroup}>
              <input name="name" type="text" required/>
              <span for="name" className={`${styles.controllabel} ${styles.labelinput}`}>Name</span>
              <i className={styles.bar}></i>
          </div>
          <div className={styles.formgroup}>
              <input name="email" type="email" required/>
              <span for="email" className={`${styles.controllabel} ${styles.labelinput}`}>E-mail</span>
              <i className={styles.bar}></i>
          </div>
          <div className={styles.formgroup}>
              <textarea name="message" required/>
              <span for="message" className={`${styles.controllabel} ${styles.labeltextarea}`}>Request</span>
              <i className={styles.bar}></i>
          </div>
          <button type="submit" className={styles.button}>
              <Icon icon={ICONS.ARROW_RIGHT} />
              Send request
          </button>
        </Fade>
    </form>
  </div>
)

export default ContactForm