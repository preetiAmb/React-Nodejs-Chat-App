import React from 'react';

import { Form, InputStyle, Button, AddChatBtn } from './Input-style';

const Input = ({ message, setMessage, sendMessage }) => (
  <Form>
      <InputStyle
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <Button type="submit" className="buttons" onClick={(event) => sendMessage(event)}>
        <AddChatBtn>
            Send
        </AddChatBtn>
      </Button>
  </Form>
)

export default Input;