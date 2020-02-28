import React from "react"
import Fade from 'react-reveal/Fade'
import styles from './credits.module.scss';


// const Members = [
//     {
//         link: "/work/",
//         text: "Name 1"
//     },
//     {
//         link: "/about/",
//         text: "Name 2"
//     },
//     {
//         link: "/contact/",
//         text: "Name 3"
//     },
// ];


const Credits = props => {
    console.log(props)
    return (
        <section className={`${styles.credits} section`}>
            <div className="container is-widescreen">
                <Fade>
                    <div className="columns">
                        <div className="column">
                            <div className={styles.label}>
                                <h5 className="label">{props.label}</h5>
                            </div>
                        </div>
                        <div className="column">
                            <h3 className={styles.headline}>{props.headline}</h3>
                            <p>{props.copy}</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className={`${styles.label} ${styles.label__credits}`}>
                                <h5 className="label">Credits</h5>
                            </div>
                        </div>
                        <div className={`${styles.members} column`}>
                            {/* <span><a href="https://www.facebook.com/">Timon Hass</a></span>
                            <span>Svenja Eggers</span> */}
                            <div className={styles.names}>{props.names}</div>

                            {/* <ul>
                                {Members.map(({ link, text }, i) => (
                                    <li key={i}>
                                        <a href={link}>{text}</a>
                                    </li>
                                )
                                )}
                            </ul> */}

                        </div>
                    </div>
                </Fade>
            </div>
        </section>


    )

}

export default Credits