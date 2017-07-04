import React, { Component } from 'react';
import About from './About';
import ProjectsList from './ProjectsList';
import Skills from './Skills';

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
        <ProjectsList />
        <Skills />
      </div>
    );
  }
}

export default Content;
