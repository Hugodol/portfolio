import React, { Component } from 'react';
import '../../styles/projects.scss';
import dividerLarge from '../../assets/images/dividers/divider_projects_large.png';
import dividerMedium from '../../assets/images/dividers/divider_projects_medium.png';
import dividerSmall from '../../assets/images/dividers/divider_projects_small.png';
import myProjects from '../my_projects.js';
import ProjectEntry from './ProjectEntry';
import ProjectsButtons from './buttons/ProjectsButtons';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state = {
      projects: myProjects,
    };
  }

  render() {
    return (
      <div className="projects">
        <img src={dividerLarge} className="divider_right divider_large" />
        <img src={dividerMedium} className="divider_right divider_medium" />
        <img src={dividerSmall} className="divider_right divider_small" />
        <h1 className="title_right title">my apps</h1>
        <div className="projects_list">
          {this.state.projects.map((project, i) =>
            <ProjectEntry
              key={i}
              name={project.name}
              logo={project.logo}
              background={project.background}
              url={project.url}
            />
          )}
        </div>
        <ProjectsButtons />
      </div>
    );
  }
};

export default ProjectsList;
