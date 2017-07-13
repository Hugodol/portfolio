import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectEntry extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.changeBackground();
  }

  changeBackground() {
    const project = document.getElementById(this.props.name);
    project.style.backgroundImage = `url(${this.props.background})`;
  }

  render() {
    return (
      <a href={this.props.url} target="_blank" title={this.props.name} className="project" id={this.props.name}>
        <div className="projectName">
          {this.props.name}
        </div>
        <img className="projectLogo" src={this.props.logo} alt="" />
      </a>
    );
  }
}

ProjectEntry.propTypes = {
  name: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default ProjectEntry;
