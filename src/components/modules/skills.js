import React from "react"

import selectedClients from '../../images/selected-clients.webp'
import styles from './skills.module.scss';

const Skills = props => {
    console.log(props)
    return (
        <div className={styles.skills}>
            <div className={styles.howiwork}>
                <h1 className={styles.pagetitle}>work</h1>
                <span className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </span>
                <p>
                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                </p>
            </div>
            <div className={styles.tools}>
                <h5 class={styles.label}>Tools I'm confident with</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa.
                </p>
                <img src={selectedClients} alt=""/>
            </div>
        </div>
    )

}

export default Skills