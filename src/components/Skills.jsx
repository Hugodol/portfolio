import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/skills.scss';
import dividerLarge from '../../assets/images/dividers/divider_skills_large.png';
import dividerMedium from '../../assets/images/dividers/divider_skills_medium.png';
import dividerSmall from '../../assets/images/dividers/divider_skills_small.png';
import dividerXSmall from '../../assets/images/dividers/divider_skills_x-small.png';
import myDevSkills from '../my_dev_skills';
import myDesignSkills from '../my_design_skills';
import SkillEntry from './SkillEntry';
import SkillsButtons from './buttons/SkillsButtons';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      devSkills: myDevSkills,
      designSkills: myDesignSkills,
    };
  }

  render() {
    return (
      <div className="skills">
        <img src={dividerLarge} className="divider_left divider_large" alt="" />
        <img src={dividerMedium} className="divider_left divider_medium" alt="" />
        <img src={dividerSmall} className="divider_left divider_small" alt="" />
        <img src={dividerXSmall} className="divider_left divider_x-small" alt="" />
        <h1 className="title_left title">skills</h1>
        <div className="dev">DEVELOPMENT</div>
        <div className="mySkillsDev">
          {this.state.devSkills.map(skill => (
            <SkillEntry
              key={skill.id}
              logo={skill.logo}
              skill={skill.skill}
            />
          ))}
        </div>
        <div className="design">DESIGN</div>
        <div className="mySkillsDesign">
          {this.state.designSkills.map(skill => (
            <SkillEntry
              key={skill.id}
              logo={skill.logo}
              skill={skill.skill}
            />
          ))}
        </div>
        {!this.props.mobile
          ? <SkillsButtons />
          : null
        }
      </div>
    );
  }
}

Skills.propTypes = {
  mobile: PropTypes.bool.isRequired,
};


export default Skills;
