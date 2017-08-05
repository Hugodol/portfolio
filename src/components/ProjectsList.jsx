import React, { Component } from 'react';
import '../../styles/projects.scss';
import myProjects from '../../data/my_projects';
import ProjectEntry from './ProjectEntry';

const dividerLarge = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/dividers/divider_projects_large.png';
const dividerMedium = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/dividers/divider_projects_medium.png';
const dividerSmall = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/dividers/divider_projects_small.png';
const dividerXSmall = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/dividers/divider_projects_x-small.png';

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
        <img src={dividerLarge} className="divider_right divider_large" alt="" />
        <img src={dividerMedium} className="divider_right divider_medium" alt="" />
        <img src={dividerSmall} className="divider_right divider_small" alt="" />
        <img src={dividerXSmall} className="divider_right divider_x-small" alt="" />
        <h1 className="title_right title">my apps</h1>
        <div className="projects_list">
          {this.state.projects.map(project =>
            (<ProjectEntry
              key={project.id}
              name={project.name}
              logo={project.logo}
              background={project.background}
              url={project.url}
            />),
          )}
        </div>
      </div>
    );
  }
}

export default ProjectsList;
