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
      offset: 200,
      reverse: true
    })
    .setClassToggle('#scrollTest', 'hidden')
    .addTo(controller);
  }

  render() {
    return (
      <div className="content">
        <img
          src="https://image.ibb.co/mvzCL5/scroll_1.png"
          alt="scroll_1"
          id="scrollTest"
          className="hidden"
        />
      </div>
    );
  }
}

export default Content;
