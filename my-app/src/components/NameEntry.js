import React, { Component } from 'react';
import '../css/NameEntry.css';

class NameEntry extends Component {
  state = {
    userName: '',
  }

  handleInputChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNameSubmit(this.state.userName);
  }

  render() {
    return (
      <div className="name-entry-overlay">
        <div className="name-entry-container">
          <h1 className="title">Join the Stream</h1>
          <form className="name-entry-form" onSubmit={this.handleSubmit}>
            <input id="name-input" type="text" value={this.state.userName} onChange={this.handleInputChange} className="name-input" placeholder="Enter your name" />
            <button type="submit" className="name-submit-button">Join</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NameEntry;
