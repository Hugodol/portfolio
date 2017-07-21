import React, { Component } from 'react';
// import { Howl } from 'howler';
import TweenLite from 'gsap';
import '../../../node_modules/gsap/ScrollToPlugin';
import '../../../styles/topButtons.scss';
import startButton from '../../../assets/images/navbuttons/buttons_start.png';
import aboutButton from '../../../assets/images/navbuttons/buttons_about.png';
import appsButton from '../../../assets/images/navbuttons/buttons_apps.png';
import skillsButton from '../../../assets/images/navbuttons/buttons_skills.png';
// import scrollSound from '../../../assets/audio/scroll_sfx.mp3';

class TopButtons extends Component {
  constructor() {
    super();
    this.state = {
      hide: 'hidden',
    };
    this.show = this.show.bind(this);
  }

  scrollTo(speed, elem) {
    // const scrollSFX = new Howl({
    //   src: [scrollSound],
    //   volume: 0.5,
    // });
    // scrollSFX.play();
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
