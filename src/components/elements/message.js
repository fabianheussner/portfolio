import React from 'react'
import Typical from 'react-typical'
import styles from './message.module.scss'

class Message extends React.Component {
// const Message = props => {
  render () {
  // console.log(props)
    return (
      <div className={styles.chatbubble}>
        <Typical
          steps={['...', 2000, 'Hi there nightowl 🦉', 1000, "I'm Fabian 👋", 500]}
          loop={1}
          wrapper="div"
        />
      </div>
    )
  };
}

// {props.message}
  
export default Message