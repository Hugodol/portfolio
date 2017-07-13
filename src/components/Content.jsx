import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/content.scss';
import About from './About';
import ProjectsList from './ProjectsList';
import Skills from './Skills';

const Content = props => (
  <div className="content">
    <About mobile={props.mobile} />
    <ProjectsList mobile={props.mobile} />
    <Skills mobile={props.mobile} />
  </div>
);

Content.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default Content;
