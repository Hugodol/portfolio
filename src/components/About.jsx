import React, { Component } from 'react';
import TweenLite from 'gsap';
import ScrollTo from '../../node_modules/gsap/ScrollToPlugin';
import portrait from '../../assets/images/divider_about.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import '../../styles/about.scss';

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  scrollClick(elem) {
    TweenLite.to(window, .8, {scrollTo: elem});
  }

  render() {
    return (
      <div className="about" id="about">
        <img src={portrait} className="divider_left" />
        <h3 className="title_left title">About me</h3>
        <p className="about_text">
          Consectetur adipiscing elit. Nam quis risus congue, cursus lacus ac, sollicitudin massa. Cras pellentesque purus sem, <em className="scroll" onClick={() => this.scrollClick('.projects')}>Applications</em> elementum nulla sagittis sit amet. Sed blandit congue augue, ut feugiat elit faucibus non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porttitor enim vitae nisi porta sodales in in erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque imperdiet lorem vitae tempor euismod. Curabitur sit amet purus vel risus posuere commodo. Curabitur pretium orci velit, eu condimentum massa rhoncus quis.
          Sed ultrices viverra scelerisque. Proin <em className="scroll" onClick={() => this.scrollClick('.skills')}>Skills</em> sapien sem. Praesent ut quam vitae dolor dignissim tempus sed nec velit. Suspendisse pellentesque porta nibh, ut lobortis tellus vestibulum id. Sed vulputate, turpis quis bibendum maximus, tortor nisl rhoncus nibh, quis molestie tortor augue at elit. Vivamus ut lectus risus. Praesent pellentesque magna non ornare tincidunt. Nullam varius mi sed mauris dapibus, at volutpat tellus dignissim. Cras ultrices ex in libero auctor, sit amet cursus urna auctor. Ut augue neque, mollis ut posuere non, vestibulum eu quam.
        </p>
        <a href="https://www.linkedin.com/in/hugodolemieux/" className="linkedin link" target="_blank" title="Hugo Dolemieux's LinkedIn">
          <img src={linkedin} className="link_logo" />
          <div className="link_text">LinkedIn</div>
        </a>
        <a href="https://github.com/Hugodol/" className="github link" target="_blank" title="Hugo Dolemieux's Github">
          <img src={github} className="link_logo" />
          <div className="link_text">Github</div>
        </a>
      </div>
    );
  }
};

export default About;
