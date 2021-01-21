import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message.js';

//import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom>
    {messages.map((message) => 
      <>
        <Message message={message} name={name}/>
      </>)}
  </ScrollToBottom>
);

export default Messages;