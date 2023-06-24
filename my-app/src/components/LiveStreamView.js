import React, { Component } from 'react';
import BroadcastView from './BroadcastView';
import NameEntry from './NameEntry';

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
      <div>
        {this.props.userName === null ? (
          <NameEntry onUserNameSubmit={this.handleUserNameSubmit} />
        ) : (
          <BroadcastView />
        )}
      </div>
    );
  }
}

export default LiveStreamView;
