import React from 'react';
import divider from '../../assets/images/divider_skills.png'
import '../../styles/skills.scss';

const Skills = () => {
  return (
    <div className="skills">
      <img src={divider} className="divider_left" />
      <h3 className="title_left title">Skills</h3>
    </div>
  );
};

export default Skills;
