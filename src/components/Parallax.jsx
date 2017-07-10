import React, { Component } from 'react';
import TopButtons from './buttons/TopButtons';
import '../../styles/parallax.scss';

class Parallax extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.parallax();
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
    return (
      <div className="parallax">
        <div className="parallax_layer" id="layer_0" data-type="parallax" data-depth="0.10" />
        <div className="parallax_layer" id="layer_1" data-type="parallax" data-depth="0.20" />
        <div className="parallax_layer" id="layer_2" data-type="parallax" data-depth="0.50" />
        <div className="parallax_layer" id="layer_name" data-type="parallax" data-depth="0.80" />
        <div className="parallax_layer" id="layer_3" data-type="parallax" data-depth="0.90" />
        <div className="parallax_layer" id="layer_4" data-type="parallax" data-depth="1.00" />
        <TopButtons />
      </div>
    );
  }
}

export default Parallax;
