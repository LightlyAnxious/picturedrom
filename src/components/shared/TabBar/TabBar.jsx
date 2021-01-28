import React, {
  cloneElement,
  Children,
  useState,
  useEffect,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabBarNav from './TabBarNav';

import './TabBar.scss';

const TabBar = ({children = [], className = ''}) => {
  const classes = classNames('tab-bar', className, 'movie-card__nav');
  const [activeTab, setActiveTab] = useState(null);

  const getChildrenLabels = useCallback(
    () => children.map(child => child.props.label),
    [children]
  );

  const handleTabClick = tab => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  const renderTabs = () => {
    const labels = getChildrenLabels();

    if (!labels) {
      return null;
    }

    return labels.map(navLabel => {
      const isActive = activeTab === navLabel;

      return (
        <TabBarNav
          key={navLabel}
          navLabel={navLabel}
          className={className}
          activeTab={isActive}
          onChangeActiveTab={handleTabClick}
          href="#"
        />
      );
    });
  };

  useEffect(() => {
    const defaultTab = getChildrenLabels(children)[0];
    setActiveTab(defaultTab);
  }, [children, getChildrenLabels]);

  return (
    <>
      <nav className={classes}>
        <ul className={`${className}__list`}>{renderTabs()}</ul>
      </nav>
      {Children.map(children, child =>
        cloneElement(child, {
          activeTab,
          className,
        })
      )}
    </>
  );
};

TabBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TabBar;
