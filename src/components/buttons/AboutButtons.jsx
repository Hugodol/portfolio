import React, { Component } from 'react';
import TweenLite from 'gsap';
import ScrollTo from '../../../node_modules/gsap/ScrollToPlugin';
import '../../../styles/rightButtons.scss';
import menuButton from '../../../assets/images/navbuttons/buttons_menu.png';
import topButton from '../../../assets/images/navbuttons/buttons_top_blue.png';
import appsButton from '../../../assets/images/navbuttons/buttons_apps_white.png';
import skillsButton from '../../../assets/images/navbuttons/buttons_skills_white.png';

class AboutButtons extends Component {
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
      <div className="right_container">
        <img
          src={menuButton}
          className="button"
          onClick={this.show}
        />
        <img
          src={topButton}
          className={`button right_top ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(1.5, 'top');
            this.show();
          }}
        />
        <img
          src={appsButton}
          className={`button right_mid ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(2, 'projects');
            this.show();
          }}
        />
        <img
          src={skillsButton}
          className={`button right_bottom ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(2.5, 'skills');
            this.show();
          }}
        />
      </div>
    );
  }
}

export default AboutButtons;
