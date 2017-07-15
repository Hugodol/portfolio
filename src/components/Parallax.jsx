import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/parallax.scss';
import TopButtons from './buttons/TopButtons';

class Parallax extends Component {
  constructor() {
    super();
    this.state = {
      mobileCover: false,
    };
  }

  componentDidMount() {
    this.parallax();
    this.switchToMobile();
  }

  switchToMobile() {
    window.innerWidth <= 430
      ? this.setState({ mobileCover: true })
      : this.setState({ mobileCover: false });

    window.addEventListener('resize', ({ target }) => {
      target.innerWidth <= 430
        ? this.setState({ mobileCover: true })
        : this.setState({ mobileCover: false });
    });
  }

  parallax() {
    window.addEventListener('scroll', () => {
      let depth;
      let layer;
      let movement;
      let translate3d;
      const topDistance = window.pageYOffset;
      const layers = document.querySelectorAll("[data-type='parallax']");
      for (let i = 0; i < layers.length; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);
        translate3d = `translate3d(0, ${movement}px, 0)`;
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
      }
    });
  }

  render() {
    return !this.state.mobileCover
        ? (<div className="parallax">
          <div className="parallax_layer" id="layer_0" data-type="parallax" data-depth="0.10" />
          <div className="parallax_layer" id="layer_1" data-type="parallax" data-depth="0.20" />
          <div className="parallax_layer" id="layer_2" data-type="parallax" data-depth="0.50" />
          <div className="parallax_layer" id="layer_name" data-type="parallax" data-depth="0.80" />
          <div className="parallax_layer" id="layer_3" data-type="parallax" data-depth="0.90" />
          <div className="parallax_layer" id="layer_4" data-type="parallax" data-depth="1.00" />
          {!this.props.mobile
              ? <TopButtons />
              : null
            }
        </div>)
        : (<div className="mobileCover" />);
  }
}

Parallax.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default Parallax;
