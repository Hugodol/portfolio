import React, { Component } from 'react';
import TweenLite from 'gsap';
import ScrollTo from '../../../node_modules/gsap/ScrollToPlugin';
import '../../../styles/leftButtons.scss';
import menuButton from '../../../assets/images/navbuttons/buttons_menu.png';
import aboutButton from '../../../assets/images/navbuttons/buttons_about_white.png';
import topButton from '../../../assets/images/navbuttons/buttons_top_yellow.png';
import skillsButton from '../../../assets/images/navbuttons/buttons_skills_white.png';

class ProjectsButtons extends Component {
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
      <div className="left_container">
        <img
          src={menuButton}
          className="button"
          onClick={this.show}
        />
        <img
          src={topButton}
          className={`button left_top ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(2, 'top');
            this.show();
          }}
        />
        <img
          src={aboutButton}
          className={`button left_mid ${this.state.hide}`}
          onClick={() => {
            this.scrollTo(1.5, 'about');
            this.show();
          }}
        />
        <img
          src={skillsButton}
          className={`button left_bottom ${this.state.hide}`}
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