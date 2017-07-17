import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/about.scss';
import dividerLarge from '../../assets/images/dividers/divider_about_large.png';
import dividerMedium from '../../assets/images/dividers/divider_about_medium.png';
import dividerSmall from '../../assets/images/dividers/divider_about_small.png';
import dividerXSmall from '../../assets/images/dividers/divider_about_x-small.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import AboutButtons from './buttons/AboutButtons';

const About = props => (
  <div className="about" id="about">
    <img src={dividerLarge} className="divider_left divider_large" alt="" />
    <img src={dividerMedium} className="divider_left divider_medium" alt="" />
    <img src={dividerSmall} className="divider_left divider_small" alt="" />
    <img src={dividerXSmall} className="divider_left divider_x-small" alt="" />
    <h1 className="title_left title">about me</h1>
    <div className="about_text">
          Consectetur adipiscing elit. Nam quis risus congue, cursus lacus ac, sollicitudin massa. Cras pellentesque purus sem, elementum nulla sagittis sit amet. Sed blandit congue augue, ut feugiat elit faucibus non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porttitor enim vitae nisi porta sodales in in erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque imperdiet lorem vitae tempor euismod. Curabitur sit amet purus vel risus posuere commodo. Curabitur pretium orci velit, eu condimentum massa rhoncus quis.
          Sed ultrices viverra scelerisque. Proin sapien sem. Praesent ut quam vitae dolor dignissim tempus sed nec velit. Suspendisse pellentesque porta nibh, ut lobortis tellus vestibulum id. Sed vulputate, turpis quis bibendum maximus, tortor nisl rhoncus nibh, quis molestie tortor augue at elit. Vivamus ut lectus risus. Praesent pellentesque magna non ornare tincidunt. Nullam varius mi sed mauris dapibus, at volutpat tellus dignissim. Cras ultrices ex in libero auctor, sit amet cursus urna auctor. Ut augue neque, mollis ut posuere non, vestibulum eu quam.
        </div>
    <div className="links">
      <a href="https://www.linkedin.com/in/hugodolemieux/" className="linkedin link" target="_blank" rel="noopener noreferrer" title="Hugo Dolemieux's LinkedIn">
        <img src={linkedin} className="link_logo" alt="" />
        <div className="link_text">LinkedIn</div>
      </a>
      <a href="https://github.com/Hugodol/" className="github link" target="_blank" rel="noopener noreferrer" title="Hugo Dolemieux's Github">
        <img src={github} className="link_logo" alt="" />
        <div className="link_text">Github</div>
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
