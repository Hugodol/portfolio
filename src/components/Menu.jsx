import React, { Component } from 'react';
import TweenLite from 'gsap';
import '../../node_modules/gsap/ScrollToPlugin';
import '../../styles/menu.scss';

const menuButton = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/menu.png';
const topButton = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/menu_top.png';
const aboutButton = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/menu_about.png';
const appsButton = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/menu_apps.png';
const skillsButton = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/menu_skills.png';

class ProjectsButtons extends Component {
  constructor() {
    super();
    this.state = {
      hide: 'hidden',
    };
    this.show = this.show.bind(this);
  }

  scrollTo(speed, elem) {
    TweenLite.to(window, speed, { scrollTo: `.${elem}` });
  }

  show() {
    this.state.hide === '' // eslint-disable-line no-unused-expressions
      ? this.setState({ hide: 'hidden' })
      : this.setState({ hide: '' });
  }

  render() {
    return (
      <div className="menu">
        <img
          src={menuButton}
          alt=""
          className="button"
          onClick={this.show}
        />
        <img
          src={topButton}
          alt=""
          className={`button menuTop ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(2, 'top');
            this.show();
          }}
        />
        <img
          src={aboutButton}
          alt=""
          className={`button menuAbout ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(1.5, 'about');
            this.show();
          }}
        />
        <img
          src={appsButton}
          alt=""
          className={`button menuApps ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(2.5, 'projects');
            this.show();
          }}
        />
        <img
          src={skillsButton}
          alt=""
          className={`button menuSkills ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(2.5, 'skills');
            this.show();
          }}
        />
      </div>
    );
  }
}

export default ProjectsButtons;
