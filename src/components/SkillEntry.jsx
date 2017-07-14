import React from 'react';
import PropTypes from 'prop-types';

const SkillEntry = props => (
  <div className="skill">
    <img className="skillLogo" src={props.logo} alt="" />
    <span className="skillName">{props.skill}</span>
  </div>
);

SkillEntry.propTypes = {
  logo: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillEntry;
