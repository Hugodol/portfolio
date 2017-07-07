import React from 'react';
import '../../styles/skills.scss';
import dividerLarge from '../../assets/images/dividers/divider_skills_large.png'
import dividerMedium from '../../assets/images/dividers/divider_skills_medium.png'
import dividerSmall from '../../assets/images/dividers/divider_skills_small.png'
import SkillsButtons from './buttons/SkillsButtons';

const Skills = () => {
  return (
    <div className="skills">
      <img src={dividerLarge} className="divider_left divider_large" />
      <img src={dividerMedium} className="divider_left divider_medium" />
      <img src={dividerSmall} className="divider_left divider_small" />
      <h3 className="title_left title">skills</h3>
      <SkillsButtons />
    </div>
  );
};

export default Skills;
