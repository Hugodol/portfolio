import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/skills.scss';
import dividerLarge from '../../assets/images/dividers/divider_skills_large.png';
import dividerMedium from '../../assets/images/dividers/divider_skills_medium.png';
import dividerSmall from '../../assets/images/dividers/divider_skills_small.png';
import SkillsButtons from './buttons/SkillsButtons';

const Skills = props => (
  <div className="skills">
    <img src={dividerLarge} className="divider_left divider_large" alt="" />
    <img src={dividerMedium} className="divider_left divider_medium" alt="" />
    <img src={dividerSmall} className="divider_left divider_small" alt="" />
    <h1 className="title_left title">skills</h1>
    {!props.mobile
      ? <SkillsButtons />
      : null
    }
  </div>
);

Skills.propTypes = {
  mobile: PropTypes.bool.isRequired,
};


export default Skills;
