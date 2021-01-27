import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import childrenProptypes from 'proptypes/children.prop';

const GenreItem = props => {
  const {onClick, children, className} = props;
  return (
    <Link
      to="/"
      href="#"
      onClick={onClick}
      className={`catalog__genres-link ${className}`}
      {...props}>
      {children}
    </Link>
  );
};

GenreItem.propTypes = {
  onClick: PropTypes.func,
  children: childrenProptypes,
  className: PropTypes.string,
};

export default GenreItem;
