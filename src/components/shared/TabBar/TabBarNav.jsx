import React from 'react';
import PropTypes from 'prop-types';

const noop = () => {};

const TabBarNav = ({
  navLabel = '',
  className = '',
  activeTab = false,
  onChangeActiveTab = noop,
  href = '',
}) => {
  const Tag = href ? 'a' : 'button';

  return (
    <li
      className={
        activeTab
          ? `${className}__item ${className}__item--active active`
          : `${className}__item`
      }>
      <Tag
        className={
          activeTab
            ? `nav-item active ${className}__link ${className}__link--active`
            : `nav-item ${className}__link`
        }
        onClick={evt => {
          evt.preventDefault();
          onChangeActiveTab(navLabel);
        }}
        href={href || ''}>
        {navLabel}
      </Tag>
    </li>
  );
};

TabBarNav.propTypes = {
  navLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeActiveTab: PropTypes.func,
  href: PropTypes.string,
  activeTab: PropTypes.bool,
};

export default TabBarNav;
