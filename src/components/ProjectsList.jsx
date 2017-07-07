import React, { Component } from 'react';
import dividerLarge from '../../assets/images/dividers/divider_projects_large.png';
import dividerMedium from '../../assets/images/dividers/divider_projects_medium.png';
import dividerSmall from '../../assets/images/dividers/divider_projects_small.png';
import ProjectEntry from './ProjectEntry';
import '../../styles/projects.scss';

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
        <img src={dividerLarge} className="divider_right divider_large" />
        <img src={dividerMedium} className="divider_right divider_medium" />
        <img src={dividerSmall} className="divider_right divider_small" />
        <h3 className="title_right title">my apps</h3>
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