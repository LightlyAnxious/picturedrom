import PropTypes from 'prop-types';
import React from 'react';

import {ReactComponent as LogoPicture} from 'assets/picturedrome-logo.svg';

import './Logo.scss';

const Logo = ({Component = 'a', path = ''}) => (
  <div className="logo">
    <Component to={path} className="logo__link">
      <LogoPicture className="logo__picture" />
      <b>PICTUREDROME</b>
    </Component>
  </div>
);

Logo.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  path: PropTypes.string,
};

export default Logo;
