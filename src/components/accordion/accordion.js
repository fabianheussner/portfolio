import React, { useState, useRef } from "react";

import styles from './accordion.module.scss';
import OpenToggle from './opentoggle'

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "" : styles.rotate
        );
    }

    return (
        <div className={`${styles.accordion__section} accordionwrapper`}>
            <button className={`${styles.accordion} ${setActive}`} onClick={toggleAccordion}>
                <p className={styles.accordion__title}>{props.title}</p>
                <span className={styles.accordion__iconwrapper}>
                    <OpenToggle className={`${styles.accordion__icon} ${setRotate}`} width={24} height={24} fill={"#556FF2"} />
                </span>
            </button>
            <div 
                ref={content} 
                style={{ maxHeight: `${setHeight}` }}
                className={styles.accordion__content}>
                <div
                    className={styles.accordion__text}
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default Accordion;