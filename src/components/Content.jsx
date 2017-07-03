import React, { Component } from 'react';
import About from './About';

class Content extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // this.scrollAnimation();
  }

  scrollAnimation() {
    // window.addEventListener('scroll', () => {

    // });
  }

  render() {
    return (
      <div className="content">
        <About />
      </div>
    );
  }
}

export default Content;
