import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TabBarItem = ({children = [], label = '', activeTab = ''}) => {
  const classes = classNames('tab-bar__item', {
    active: activeTab === label,
  });

  return <div className={classes}>{children}</div>;
};

TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string,
};

export default TabBarItem;
