import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import ChatBubble from "./chatbubble"
import ScrollDown from "./scrolldown"

import illuHome from '../images/illustration-home.svg'

import styles from './stagehome.module.scss';

const StageHome = () => (
  
    <section className={`${styles.stage} section`}>
        <div class="container">
            <div class="columns">
                <div class="column">
                    <ChatBubble message="Hey there nightowl 🦉" />
                    <h1 className={styles.pagetitle}>hi there</h1>
                    <span className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient.
                    </span>
                    <ScrollDown />
                </div>
                <div class="column">
                    <img src={illuHome} alt="" />
                </div>
            </div>
        </div>
    </section>

)

export default StageHome