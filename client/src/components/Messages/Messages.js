import React from 'react';

import { MessagesStyle } from './Messages-style';

import Message from './Message/Message.js';


const Messages = ({ messages, name }) => (
  <MessagesStyle>
    {messages.map((message, i) => 
        <div key={i}><Message message={message} name={name}/></div>)}
  </MessagesStyle>
);

export default Messages;