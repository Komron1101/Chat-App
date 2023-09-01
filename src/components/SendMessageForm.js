import React, { useState } from 'react';

const SendMessageForm = ({ onSendMessage }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            onSendMessage(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="SendMessageForm">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Send a message..."
            />
            <button type="submit">Send</button>
        </form>
    );
}

export default SendMessageForm;