import React from 'react'
import styles from './table-large.module.scss'
import Fade from 'react-reveal/Fade'
import {
    logoAbstract,
    logoAfterEffects,
    logoCinema4D,
    logoFigma,
    logoGatsby,
    logoHtml,
    logoIllustrator,
    logoInvision,
    logoPhotoshop,
    logoReact,
    logoSass,
    logoSketch
} from '../../images/tools'

const TableLarge = props => {
    console.log(props)
    return (
        <div className="section">
            <div className="container is-widescreen">
                <Fade>
                    <h5 className={styles.label}>Tools I'm confident with</h5>  
                    <div className={styles.table}>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoSketch} alt="Logo Sketch"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoAbstract} alt="Logo Abstract"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoFigma} alt="Logo Figma"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoInvision} alt="Logo Invision and Invision Studio"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoPhotoshop} alt="Logo Photoshop"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoIllustrator} alt="Logo Illustrator"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoAfterEffects} alt="Logo After Effects"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoCinema4D} alt="Logo Cinema 4D"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoHtml} alt="Logo HTML"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoSass} alt="Logo SCSS"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoGatsby} alt="Logo Gatsby"/>
                        </div>
                        <div className={`${styles.cell} ${props.width} ${styles.row6}`}>
                            <img src={logoReact} alt="Logo React"/>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
} 


export default TableLarge