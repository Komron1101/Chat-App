import React, { useState } from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import UserIcon from './UserIcon';

const ChatRoom = () => {
    const messages = [
        {
            id: 1,
            type: 'Received',
            content: 'Hello! How are you?'
        },
        {
            id: 2,
            type: 'Sent',
            content: 'Hello! Everything is fine. And you?'
        },
        {
            id: 3,
            type: 'Received',
            content: 'Good too, thanks!'
        }
    ];
    const [newMessages, setNewMessages] = useState(messages);

    const handleSendMessage = (text) => {
        // Добавляем новое сообщение в список сообщений.
        setNewMessages([...newMessages, 
            { 
                id: Math.random(), 
                type: 'Sent', 
                content: text 
            }]);
        console.log(newMessages)
    };

    return (
        <div className="ChatRoom">
            {/* <h1>Welcome To CommaSocial</h1> */}
            <UserIcon userName="Komron" />
            <MessageList messages={newMessages} />
            <SendMessageForm onSendMessage={handleSendMessage} />
        </div>
    );
}

export default ChatRoom;