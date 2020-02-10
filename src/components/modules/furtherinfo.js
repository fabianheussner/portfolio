import React from 'react'
import styles from './furtherinfo.module.scss'
import Fade from 'react-reveal/Fade'
import profileImage from '../../images/other/fabian-heussner-profile-image.jpg'

const FurtherInfo = props => {
    console.log(props)
    return (
        <section className={`${styles.furtherinfo} section`} id="furtherinfo">
            <div className="container is-widescreen">
                <div className={`${styles.furtherinfo__columns} columns`}>
                    <div className="column is-4-desktop is-5-tablet">
                        <Fade>
                            <img className={styles.image} src={profileImage} alt="Fabian Heußner" />
                        </Fade>
                    </div>
                    <div className="column is-6-desktop is-offset-2-desktop is-6-tablet is-offset-1-tablet">
                        <Fade bottom>
                            <p className={styles.info}>
                                <span className={styles.first}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default FurtherInfo