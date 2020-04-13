import React from 'react'
import Message from './Message'

function Messages(props){
    return(
        <div>
            {Object.keys(props.messages).map((messageKey, i) => {
                const messageNode = props.messages[messageKey] 
                return(
                    <Message key={i} name={messageNode.name} message={messageNode.message}/>
                )
            })}
        </div>
    )
}
export default Messages;