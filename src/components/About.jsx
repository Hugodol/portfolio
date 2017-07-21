import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/about.scss';
import dividerLarge from '../../assets/images/dividers/divider_about_large.png';
import dividerMedium from '../../assets/images/dividers/divider_about_medium.png';
import dividerSmall from '../../assets/images/dividers/divider_about_small.png';
import dividerXSmall from '../../assets/images/dividers/divider_about_x-small.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import aboutText from '../about';
import AboutButtons from './buttons/AboutButtons';

const About = props => (
  <div className="about" id="about">
    <img src={dividerLarge} className="divider_left divider_large" alt="" />
    <img src={dividerMedium} className="divider_left divider_medium" alt="" />
    <img src={dividerSmall} className="divider_left divider_small" alt="" />
    <img src={dividerXSmall} className="divider_left divider_x-small" alt="" />
    <h1 className="title_left title">about me</h1>
    <div className="about_text">
      {aboutText}
    </div>
    <div className="links">
      <a href="https://www.linkedin.com/in/hugodolemieux/" className="linkedin link" target="_blank" rel="noopener noreferrer" title="Hugo Dolemieux's LinkedIn">
        <img src={linkedin} className="link_logo" alt="" />
        <div className="link_text">linkedIn</div>
      </a>
      <a href="https://github.com/Hugodol/" className="github link" target="_blank" rel="noopener noreferrer" title="Hugo Dolemieux's Github">
        <img src={github} className="link_logo" alt="" />
        <div className="link_text">github</div>
      </a>
    </div>
    {!props.mobile
      ? <AboutButtons />
      : null
    }
  </div>
);

About.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default About;
