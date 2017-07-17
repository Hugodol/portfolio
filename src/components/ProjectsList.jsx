import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/projects.scss';
import dividerLarge from '../../assets/images/dividers/divider_projects_large.png';
import dividerMedium from '../../assets/images/dividers/divider_projects_medium.png';
import dividerXSmall from '../../assets/images/dividers/divider_projects_x-small.png';
import myProjects from '../my_projects';
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
        <img src={dividerLarge} className="divider_right divider_large" alt="" />
        <img src={dividerMedium} className="divider_right divider_medium" alt="" />
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
        {!this.props.mobile
          ? <ProjectsButtons />
          : null
        }
      </div>
    );
  }
}

ProjectsList.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default ProjectsList;
