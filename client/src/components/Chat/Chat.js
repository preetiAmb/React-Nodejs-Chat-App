import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import io from 'socket.io-client';

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket;

const Chat = () => {
    const location = useLocation()
    const [ name, setName] = useState('');
    const [ room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:3000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        console.log( name, room );

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages([ ...messages, message ]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });
    }, [messages]);
   

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    console.log(message, messages);
  
    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="main">
                <InfoBar />
                    <Messages messages={messages} name={name} />
                        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />     
                </div>
            </div>
            </div>

    )
}

export default Chat
