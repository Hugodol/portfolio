import React, { Component } from 'react';
import TweenLite from 'gsap';
import '../../node_modules/gsap/ScrollToPlugin';
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
    this.initSize();
    this.resize();
    this.autoScroll();
  }

  initSize() {
    window.innerWidth <= 1080
      ? this.setState({ mobile: true })
      : this.setState({ mobile: false });
  }

  resize() {
    window.addEventListener('resize', ({ target }) => {
      target.innerWidth <= 1080
        ? this.setState({ mobile: true })
        : this.setState({ mobile: false });
    });
  }

  autoScroll() {
    let position;

    window.addEventListener('scroll', () => {
      position = window.pageYOffset;
    });

    window.addEventListener('resize', ({ target }) => {
      if (target.innerWidth > 809) {
        if (position >= 0 && position < 900) {
          TweenLite.to(window, 1.5, { scrollTo: '.top' });
        }
        if (position >= 900 && position < 1950) {
          TweenLite.to(window, 1.5, { scrollTo: '.about' });
        }
        if (position >= 1950 && position < 3000) {
          TweenLite.to(window, 1.5, { scrollTo: '.projects' });
        }
        if (position >= 3000) {
          TweenLite.to(window, 1.5, { scrollTo: '.skills' });
        }
      }
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
