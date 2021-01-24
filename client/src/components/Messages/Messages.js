import React from 'react';

import { MessagesStyle } from './Messages-style';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message.js';


const Messages = ({ messages, name }) => (
  <ScrollToBottom MessagesStyle={MessagesStyle}>
    {messages.map((message, i) => 
        <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;