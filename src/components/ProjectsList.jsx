import React, { Component } from 'react';
import '../../styles/projects.scss';
import dividerLarge from '../../assets/images/dividers/divider_projects_large.png';
import dividerMedium from '../../assets/images/dividers/divider_projects_medium.png';
import dividerSmall from '../../assets/images/dividers/divider_projects_small.png';
import ProjectEntry from './ProjectEntry';
import ProjectsButtons from './buttons/ProjectsButtons';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {name: 'cloudMix'},
        {name: 'foodtrac'},
        {name: 'roBodoget 2.0'},
      ],
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
          {this.state.projects.map(project =>
            <ProjectEntry name={project.name} />
          )}
        </div>
        <ProjectsButtons />
      </div>
    );
  }
};

export default ProjectsList;
