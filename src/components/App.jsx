import React, { Component } from 'react';
import Parallax from './Parallax';
import Content from './Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobile: false,
    };
  }

  componentDidMount() {
    this.resize();
  }

  resize() {
    window.addEventListener('resize', ({ target }) => {
      target.innerWidth < 810
        ? this.setState({ mobile: true })
        : this.setState({ mobile: false });
    });
  }

  render() {
    return (
      <div className="top">
        <Parallax mobile={this.state.mobile} />
        <Content mobile={this.state.mobile} />
      </div>
    );
  }
}

export default App;
