import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';

class Content extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.scrollAnimation();
  }

  scrollAnimation() {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      duration: 100,
      offset: 50
    })
    .setClassToggle('#scrollTest', 'hidden')
    .addTo(controller);
  }

  render() {
    return (
      <div className="content">
      <div id="scrollTest" className="hidden">Hello World</div>
    </div>
    );
  }
}

export default Content;
