import React, { Component } from 'react';
import '../../styles/navButtons.scss';

class NavButtons extends Component {
  constructor() {
    super();
    this.state = {
      split: '',
    };
    this.split = this.split.bind(this);
  }

  split() {
    this.state.split === ''
      ? this.setState({ split: 'split' })
      : this.setState({ split: '' });
  }

  render() {
    return (
      <div className="nav_container">
        <button className={`nav ${this.state.split}`}>about</button>
        <button className={`nav ${this.state.split}`}>apps</button>
        <button className={`nav ${this.state.split}`}>skills</button>
        <button className={`nav ${this.state.split}`} onClick={this.split}>start</button>
      </div>
    );
  }
}

export default NavButtons;
