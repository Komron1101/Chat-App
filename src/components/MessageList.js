import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className='MessageList'>
            {messages.map(message => (
                <div key={message.id} className={`Message ${message.type}`}>
                    {message.content}
                </div>
            ))}
        </div>
    );
}

export default MessageList;