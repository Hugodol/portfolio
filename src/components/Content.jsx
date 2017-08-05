import React from 'react';
import '../../styles/content.scss';
import About from './About';
import ProjectsList from './ProjectsList';
import Skills from './Skills';

const Content = () => (
  <div className="content">
    <About />
    <ProjectsList />
    <Skills />
  </div>
);

export default Content;
