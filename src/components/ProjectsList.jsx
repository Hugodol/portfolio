import React, { Component } from 'react';
import '../../styles/projects.scss';
import dividerLarge from '../../assets/images/dividers/divider_projects_large.png';
import dividerMedium from '../../assets/images/dividers/divider_projects_medium.png';
import dividerSmall from '../../assets/images/dividers/divider_projects_small.png';
import cloudMix from '../../assets/images/projects/cloudmix_logo.png';
import foodtrac from '../../assets/images/projects/foodtrac_logo.png';
import robodget from '../../assets/images/projects/robodget_logo.png';
import ProjectEntry from './ProjectEntry';
import ProjectsButtons from './buttons/ProjectsButtons';

class ProjectsList extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {name: 'cloudMix', logo: cloudMix, background: 'http://wallpapercave.com/wp/OLrPvT4.jpg'},
        {name: 'roBodoget 2.0', logo: robodget, background: 'https://img06.deviantart.net/6326/i/2010/032/9/b/deep_space_nebula_by_hameed.jpg'},
        {name: 'foodtrac', logo: foodtrac, background: 'https://images8.alphacoders.com/768/768202.jpg'},
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
            <ProjectEntry name={project.name} logo={project.logo} background={project.background} />
          )}
        </div>
        <ProjectsButtons />
      </div>
    );
  }
};

export default ProjectsList;
