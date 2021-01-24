import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { UserNameInput, RoomInput, Button, AddBtn } from './Join-style';

const JoinForm = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    return (
        <div>
            <form>
                <UserNameInput 
                    type="text"
                    placeholder="Username"
                    required
                    className="useName-input"
                    onChange={(event) => setName(event.target.value)}
                />
                <RoomInput 
                    type="text"
                    placeholder="Room"
                    required
                    className="Room-input"
                    onChange={(event) => setRoom(event.target.value)}
                />
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
                    <Button type="submit">
                        <AddBtn>
                        Submit
                        </AddBtn>
                    </Button>
                </Link>
            </form>
        </div>
    )
}

export default JoinForm
