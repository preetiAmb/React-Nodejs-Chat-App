import React from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
      <input
        className="chat-input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button type="submit" className="buttons" onClick={(event) => sendMessage(event)}>
        <button className="btn add-chat-btn">
            Send
        </button>
      </button>
  </form>
)

export default Input;