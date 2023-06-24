import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import '../css/Chat.css';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      messages: [],
      endpoint: "localhost:8080" // where socket.io server is running
    };
    this.socket = socketIOClient(this.state.endpoint);
  }

  componentDidMount() {
    this.socket.on('RECEIVE_MESSAGE', (data) => {
      this.addMessage(data);
    });
  }

  addMessage = (data) => {
    this.setState({
      messages: [...this.state.messages, data]
    });
  }

  sendMessage = (event) => {
    event.preventDefault();
    this.socket.emit('SEND_MESSAGE', {
      author: this.props.userName,
      message: this.state.message
    });
    this.setState({message: ''});
  }

  render() {
    return (
        <div className="chat-container">
            <div className="chat-messages">
                {this.state.messages.map((message, index) => {
                    return (
                        <div key={index}>{message.author}: {message.message}</div>
                    )
                })}
            </div>
            <form onSubmit={this.sendMessage} className="chat-form">
                <input
                    value={this.state.message}
                    onChange={event => this.setState({message: event.target.value})}
                    placeholder="Type your message here..."
                />
                <button>Send</button>
            </form>
        </div>
    )
    }

}

export default Chat;
