import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import '../css/Chat.css'

const Chat = ({ userName }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isButtonActive, setButtonActive] = useState(false);
  const endpoint = 'http://localhost:8080'; // where socket.io server is running

  // useEffect(() => {
  //   const socket = socketIOClient(endpoint);

  //   socket.on('RECEIVE_MESSAGE', (data) => {
  //     setMessages((prevMessages) => [...prevMessages, data]);
  //   });

  //   // Clean up the socket connection on component unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message !== '') {
      setMessages((prevMessages) => [...prevMessages, { author: userName, message: message }]);
      setMessage('');
      setButtonActive(false);
    }
  };

  // const emitMessage = () => {
  //   const socket = socketIOClient(endpoint);
  //   socket.emit('SEND_MESSAGE', {
  //     author: userName,
  //     message: message,
  //   });
  //   socket.disconnect();
  // };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    setButtonActive(event.target.value !== '');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.author}</strong>: {message.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button className={isButtonActive ? 'active' : ''}>Send</button>
      </form>
    </div>
  );
};

export default Chat;
