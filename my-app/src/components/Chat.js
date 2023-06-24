import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import '../css/Chat.css'

const Chat = ({ userName }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const endpoint = 'http://localhost:8080'; // where socket.io server is running
  const socket = socketIOClient(endpoint);

  useEffect(() => {
    socket.on('RECEIVE_MESSAGE', (data) => {
      addMessage(data);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const addMessage = (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit('SEND_MESSAGE', {
      author: userName,
      message: message,
    });
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>
            {message.author}: {message.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type your message here..."
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
