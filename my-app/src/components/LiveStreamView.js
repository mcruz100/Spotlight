import React, { Component } from 'react';
import BroadcastView from './BroadcastView';
import NameEntry from './NameEntry';
import NavigationBar from './NavigationBar';
import Chat from './Chat';
import '../css/LiveStreamView.css';

class LiveStreamView extends Component {

  state = {
    userName: null
  }

  handleUserNameSubmit = (name) => {
    this.setState({ userName: name });
  }

  // Lifecycle method that runs after the component output has been rendered to the DOM
  componentDidMount() {
    // Add any logic to run after the component mounts
  }

  joinStream = () => {
    // Logic to join the live stream goes here
  }

  render() {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.userName === null ? (
          <NameEntry onUserNameSubmit={this.handleUserNameSubmit} />
        ) : (
          <div className="content">
          <div className="video-container">
            <BroadcastView />
          </div>
          <div className="chat-container">
            <Chat/>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default LiveStreamView;
