import React from 'react';
import '../../styles/about.scss';
import aboutText from '../../data/about';

const dividerLarge = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/dividers/divider_about_large.png';
const dividerMedium = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/dividers/divider_about_medium.png';
const dividerSmall = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/dividers/divider_about_small.png';
const dividerXSmall = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/dividers/divider_about_x-small.png';
const linkedin = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/linkedin.png';
const github = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/github.png';
const resume = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/resume.png';

const About = () => (
  <div className="about" id="about">
    <img src={dividerLarge} className="divider_left divider_large" alt="" />
    <img src={dividerMedium} className="divider_left divider_medium" alt="" />
    <img src={dividerSmall} className="divider_left divider_small" alt="" />
    <img src={dividerXSmall} className="divider_left divider_x-small" alt="" />
    <h1 className="title_left title">about me</h1>
    <div className="about_text">
      {aboutText.paragraph1}
      <br />
      <br />
      {aboutText.paragraph2}
      <br />
      <br />
      {aboutText.paragraph3}
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
      <a href="https://docs.google.com/document/d/1pc6fn0nJmps_c893hlg3bRGXwDMzXXSpF8nwRfKJD3Q/edit?usp=sharing" className="resume link" target="_blank" rel="noopener noreferrer" title="Hugo Dolemieux's Resume">
        <img src={resume} className="link_logo" alt="" />
        <div className="link_text">resume</div>
      </a>
    </div>
  </div>
);

export default About;
