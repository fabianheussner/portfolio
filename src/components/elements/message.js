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
          steps={['Hi there nightowl 🦉', 1000, 'My name is Fabian', 500]}
          loop={1}
          wrapper="div"
        />
        {/* Hi there nighowl <span role="img" aria-label="owl">🦉</span> */}
      </div>
    )
  };
}

// {props.message}
  
export default Message