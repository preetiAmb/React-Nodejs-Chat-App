import React, { useState } from 'react';
import DUMMY_DATA from '../../data';
import './Chat.css';

const DummyChat = () => {
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages] = useState([]);
    
    const removeMessage = messageId => {
        const updatedTodos = messages.filter(message => message.id !== messageId);
        setMessages(updatedTodos);
      };
    return (
        <li className="list-item">
         <div>
            {DUMMY_DATA.map((chat, index) => {
                    return (
                        <div key={index} className="message">
                            <div> {chat.username}: {chat.message}
                                <button
                                    className="btn-delete task-btn"
                                    onClick={() => removeMessage(message.id)}>
                                    <i class="fas fa-trash-alt"></i>     
                                </button>
                            </div>                           
                        </div> 
                    )
                })}                
            </div> 
        </li>
    )
}

export default DummyChat;




