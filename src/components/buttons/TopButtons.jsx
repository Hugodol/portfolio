import React, { Component } from 'react';
import TweenLite from 'gsap';
import '../../../node_modules/gsap/ScrollToPlugin';
import '../../../styles/topButtons.scss';

const startButton = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/buttons_start.png';
const aboutButton = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/buttons_about.png';
const appsButton = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/buttons_apps.png';
const skillsButton = 'https://s3-us-west-1.amazonaws.com/hugodolportfolio/navbuttons/buttons_skills.png';

class TopButtons extends Component {
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
      <div className="top_container">
        <img
          src={startButton}
          alt=""
          className="button"
          onClick={this.show}
        />
        <img
          src={aboutButton}
          alt=""
          className={`button top_left ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(1.5, 'about');
            this.show();
          }}
        />
        <img
          src={appsButton}
          alt=""
          className={`button top_mid ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(2, 'projects');
            this.show();
          }}
        />
        <img
          src={skillsButton}
          alt=""
          className={`button top_right ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(2.5, 'skills');
            this.show();
          }}
        />
      </div>
    );
  }
}

export default TopButtons;
