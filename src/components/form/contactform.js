import React from 'react'
import Icon from '../icons/icon'
import {ICONS} from '../icons/constants';
import styles from './contactform.module.scss'

const ContactForm = () => (
  <div className={styles.contactform}>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
        <input type="hidden" name="bot-field" />
        <div className={styles.formgroup}>
            <input name="name" type="text" required/>
            <label for="name" className={`${styles.controllabel} ${styles.labelinput}`}>Name</label>
            <i className={styles.bar}></i>
        </div>
        <div className={styles.formgroup}>
            <input name="email" type="email" required/>
            <label for="email" className={`${styles.controllabel} ${styles.labelinput}`}>E-mail</label>
            <i className={styles.bar}></i>
        </div>
        <div className={styles.formgroup}>
            <textarea name="message" required/>
            <label for="message" className={`${styles.controllabel} ${styles.labeltextarea}`}>Request</label>
            <i className={styles.bar}></i>
        </div>
        <button type="submit" className={styles.button}>
            <Icon icon={ICONS.ARROW_RIGHT} />
            Send request
        </button>
    </form>
  </div>
)

export default ContactForm