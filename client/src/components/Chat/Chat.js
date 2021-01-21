import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import io from 'socket.io-client';

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Header from '../Header/Header';

import './Chat.css';  

let socket;

const Chat = () => {
    const location = useLocation()
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage ] = useState('');
    const [ messages, setMessages] = useState([]);
    
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

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
          setMessages([...messages, message])
        })
        return () => {
          socket.off()
        }
      }, [messages])
   

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
  
    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="main">
                    <Header />
                    <InfoBar room={room}/>
                    <Messages messages={messages} name={name} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />     
                </div>
            </div>
        </div>

    )
}

export default Chat
