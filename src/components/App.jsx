import React, { Component } from 'react';
import '../../node_modules/gsap/ScrollToPlugin';
import Menu from './Menu';
import Parallax from './Parallax';
import Content from './Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // mobile: false,
    };
  }

  // componentDidMount() {
  //   this.initSize();
  //   this.resize();
  // }

  // initSize() {
  //   window.innerWidth <= 1080 || window.innerHeight <= 730
  //     ? this.setState({ mobile: true })
  //     : this.setState({ mobile: false });
  // }

  // resize() {
  //   window.addEventListener('resize', ({ target }) => {
  //     target.innerWidth <= 1080 || target.innerHeight <= 730
  //       ? this.setState({ mobile: true })
  //       : this.setState({ mobile: false });
  //   });
  // }

  render() {
    return (
      <div className="top">
        <Menu />
        <Parallax />
        <Content />
      </div>
    );
  }
}

export default App;
