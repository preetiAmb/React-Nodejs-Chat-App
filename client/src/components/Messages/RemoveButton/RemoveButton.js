import React, { useState } from 'react'

const RemoveButton = () => {
    const [ message, setMessage ] = useState('');
    const [ messages, setMessages] = useState([])
    const removeMessage = messageId => {
        const updatedTodos = messages.filter(message => message.id !== messageId);
        setMessages(updatedTodos);
      };
    return (
        <button
            className="btn-delete task-btn"
                onClick={() => removeMessage(message.id)}>
                <i class="fas fa-trash-alt"></i>     
        </button>
       
    )
}

export default RemoveButton
