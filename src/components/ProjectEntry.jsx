import React, { Component } from 'react';

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
      <div className="project" id={this.props.name}>
        <div className="projectName">
          {this.props.name}
        </div>
        <img className="projectLogo" src={this.props.logo} />
      </div>
    );
  }
}

export default ProjectEntry;
