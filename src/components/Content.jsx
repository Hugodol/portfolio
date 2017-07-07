import React, { Component } from 'react';
import '../../styles/content.scss';
import About from './About';
import ProjectsList from './ProjectsList';
import Skills from './Skills';

class Content extends Component {
  constructor() {
    super();
    this.state = {};
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
