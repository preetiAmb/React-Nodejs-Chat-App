import React from 'react';
import RemoveButton from './RemoveButton/RemoveButton';

//import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message.js';

//import './Messages.css';

const Messages = ({ messages, name }) => (
  <div>
    {messages.map((message) => 
      <div>
        <Message message={message} name={name}/>
        <RemoveButton />
      </div>)}
  </div>
);

export default Messages;