import React, { Component } from 'react';
import TweenLite from 'gsap';
import ScrollTo from '../../../node_modules/gsap/ScrollToPlugin';
import '../../../styles/topButtons.scss';
import startButton from '../../../assets/images/navbuttons/buttons_start.png';
import aboutButton from '../../../assets/images/navbuttons/buttons_about.png';
import appsButton from '../../../assets/images/navbuttons/buttons_apps.png';
import skillsButton from '../../../assets/images/navbuttons/buttons_skills.png';

class TopButtons extends Component {
  constructor() {
    super();
    this.state = {
      hide: 'hidden',
    };
    this.show = this.show.bind(this);
  }

  scrollTo(speed, elem) {
    TweenLite.to(window, speed, {scrollTo: `.${elem}`});
  }

  show() {
    this.state.hide === ''
      ? this.setState({ hide: 'hidden'})
      : this.setState({ hide: '' });
  }

  render() {
    return (
      <div className="top_container">
        <img
          src={startButton}
          className="button"
          onClick={this.show}
        />
        <img
          src={aboutButton}
          className={`button top_left ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(1.5, 'about');
            this.show();
          }}
        />
        <img
          src={appsButton}
          className={`button top_mid ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(2, 'projects');
            this.show();
          }}
        />
        <img
          src={skillsButton}
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