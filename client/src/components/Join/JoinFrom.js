import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

const JoinForm = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    return (
        <div>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Username"
                    required
                    className="useName-input"
                    onChange={(event) => setName(event.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Room"
                    required
                    className="Room-input"
                    onChange={(event) => setRoom(event.target.value)}
                />
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chatPage?name=${name}&room=${room}`}>
                    <button type="submit" className="buttons">
                        <button className="btn add-chat-btn">
                        Submit
                        </button>
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default JoinForm
