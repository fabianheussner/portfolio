import React from 'react';

import styles from './toggle.module.scss';

const Toggle = props => (
    <div className={styles.togglebutton} 
        onClick={props.click}
        onKeyDown={props.click}
        role="button"
        tabIndex="0"
    >
        <div className={styles.togglebutton__line}></div>
        <div className={styles.togglebutton__line}></div>
    </div>
);

export default Toggle