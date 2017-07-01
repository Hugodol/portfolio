import React, { Component } from 'react';
import Parallax from './Parallax';
import Content from './Content';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Parallax />
        <Content />
      </div>
    );
  }
}

export default App;
