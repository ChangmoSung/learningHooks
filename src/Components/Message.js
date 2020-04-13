import React from 'react'


function Message({name, message}){
        return(
            <li>
                <h2>{name}</h2>
                <div className="message">
                    {message}
                </div>
                <p className="time">12:01pm</p>
            </li>
        )
    }


export default Message;