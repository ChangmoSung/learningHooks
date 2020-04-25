import React, { useState, useEffect } from 'react';
import { dbRef } from './Helpers/firebase';
import Messages from './Components/Messages';
import Hi from './Components/Hi';

import {
    HashRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

function App() {
    const [messages, setMessages] = useState({});


    useEffect(() => {
        dbRef.on('value', (snapshot) => {
            const database = snapshot.val();
            setMessages(database);   
        })
    }, [])


    return(
        <Router basename='/'>
            <h1>Chat App</h1>

            <Link to='/messages'>messages</Link>
            <Link to='/messages/hi'>hi</Link>

            <Route path='/messages'>
                <Messages messages={messages} />

                <Route path='/messages/hi'>
                    <Hi />
                </Route>
            </Route>

            <Route render={() => <Hi />} />
        </Router>
    )
}


export default App;