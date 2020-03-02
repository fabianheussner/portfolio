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
                                <span className={styles.first}>I love cycling, coffee and asian food. <span role="img" aria-labelledby="bikeEmoji">🚴‍💨</span></span>
                                Outside of work you can often meet me on my road bike in the greater Hamburg area 
                                or even crossing the Alps. I draw inspiration and strength primarily from nature, 
                                my love for mountaineering and the photography of impressive architecture. 
                                Road cycling offers me an important balance to desk work and gives me the focus and 
                                the mental willpower to solve complex tasks. 
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default FurtherInfo