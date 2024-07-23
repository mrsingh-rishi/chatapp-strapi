import React, { useEffect, useState } from 'react';
import { Input } from 'antd';

import { socket } from '../../config/web-sockets';
import { StyledButton, StyledCard } from './styles';

function JoinRoom(props) {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [error, setError] = useState('');

    const onUsernameChange = e => {
        const inputValue = e.target.value;
        setUsername(inputValue);
    }

    const onRoomChange = e => {
        const roomNo = e.target.value;
        setRoom(roomNo);
    }

    useEffect(() => {
        socket.on('welcome', data => {
            props.onJoinSuccess(data);
        });
    }, [props]);

    const onClick = () => {
        if (username && room) {
            socket.emit('join', { username, room }, error => {
                if (error) {
                    setError(error);
                    alert(error);
                }
            });
        }
    }

    return (
        <StyledCard>
            <label htmlFor="username">
                Enter your name
                <Input
                    name="username"
                    placeholder="What's your name?"
                    maxLength={25}
                    value={username}
                    onChange={onUsernameChange}
                />
            </label>
            <label htmlFor="room">
                Enter room number of your choice
                <Input
                    name="room"
                    placeholder="Enter your room number"
                    maxLength={25}
                    value={room}
                    onChange={onRoomChange}
                />
            </label>
            <StyledButton
                type="primary"
                size="large"
                onClick={onClick}
            >
                Join the Chat Room
            </StyledButton>
        </StyledCard>
    );
}

export default JoinRoom;
