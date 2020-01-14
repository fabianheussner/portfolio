import React from "react"

import styles from './chatbubble.module.scss';

const ChatBubble = props => {
  console.log(props)
    return <div className={styles.chatbubble}>{props.message}</div>
}

  
export default ChatBubble