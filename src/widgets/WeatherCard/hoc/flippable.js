import React, { Component } from 'react';
import { isFunction } from '../utils/generic';
import { joinClasses } from '../utils/dom';
import './flippable.css';

/**
 * Higher order component that accepts a Front and a Back component and creates a single
 * component that can switch side based on user interaction (default: onClick);
 *
 * @param {Object|Function} options The option object or a function that returns one
 * @param {Number} options.width the width of the container. Setting a width makes the animation look better
 * @param {Number} options.height the width of the container. Setting a height makes the animation look better
 * @param {Boolean} options.disabled disables the interaction if true, useful with a runtime configuration
 * @param {String} options.interaction change the flip interaction default: 'onClick'
 */
const flippable = options => (FrontComponent, BackComponent) => {
  const FRONT = 'FRONT';
  const BACK = 'BACK';

  /**
   * if options is an object return the object, if it's a function
   * pass props to it to allow for dynamic configuration.
   */

  const getOptions = props => {
    let currentOptions = isFunction(options) ? options(props) : options;
    return {
      interaction: 'onClick',
      ...currentOptions
    };
  };

  return class Flippable extends Component {
    constructor(props) {
      super(props);
      let options = getOptions(props);
      this.state = {
        active: options.showBackFirst ? BACK : FRONT
      };
    }

    flip = () => {
      let options = getOptions(this.props);
      if (options.disabled) return;

      const flipState = state => ({
        active: state.active === FRONT ? BACK : FRONT
      });
      this.setState(flipState);
    };

    render() {
      let options = getOptions(this.props);
      let style;
      if (options.width || options.height) {
        style = {
          width: options.width,
          height: options.height
        };
      }

      let interactionProp = {
        [options.interaction || 'onClick']: this.flip
      };

      return (
        <div className="flippable" {...interactionProp} style={style}>
          {this.renderFront()}
          {this.renderBack()}
        </div>
      );
    }

    renderFront() {
      let { active } = this.state;
      let frontClass = joinClasses(
        'flippable__front-side',
        active === FRONT ? 'flippable__front-side--active' : null
      );
      return (
        <div className={frontClass}>
          <FrontComponent {...this.props} />
        </div>
      );
    }

    renderBack() {
      let { active } = this.state;
      let backClass = joinClasses(
        'flippable__back-side',
        active === BACK ? 'flippable__back-side--active' : null
      );
      return (
        <div className={backClass}>
          <BackComponent {...this.props} />
        </div>
      );
    }
  };
};

export default flippable;
