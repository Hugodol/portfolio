import React, { Component } from 'react';
import divider from '../../assets/images/divider_projects.png';
import ProjectEntry from './ProjectEntry';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state = {
      temp: [1,2,3,4],
    };
  }

  render() {
    return (
      <div className="projects">
        <img src={divider} className="divider_right" />
        <h3 className="title_right title">My Applications</h3>
        <div className="projects_list">
          {this.state.temp.map(num =>
            <ProjectEntry num={num} />
          )}
        </div>
      </div>
    );
  }
};

export default ProjectsList;
