import React, { useState, useEffect } from 'react';
import { dbRef } from './Helpers/firebase';
import Messages from './Components/Messages';



function AppFunc(){
    const [messages, setMessages] = useState({});
    useEffect(() => {
        dbRef.on('value', (snapshot) => {
            const database = snapshot.val();
            setMessages(database)
        })
    }, [])
    return(
        <div>
            <h1>Chat App</h1>
            <Messages messages={messages}/>
        </div>
    )
}
export default AppFunc;