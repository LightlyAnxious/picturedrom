import PropTypes from 'prop-types';
import React from 'react';

import {ReactComponent as LogoPicture} from 'assets/picturedrome-logo.svg';

import './Logo.scss';

const Logo = ({logoComponent = 'a', path = ''}) => {
  const Component = logoComponent;
  return (
    <div className="logo">
      <Component to={path} className="logo__link">
        <LogoPicture className="logo__picture" />
        <b className="logo__brand">PICTUREDROME</b>
      </Component>
    </div>
  );
};

Logo.propTypes = {
  logoComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.any,
  ]),
  path: PropTypes.string,
};

export default Logo;
