import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';

import childrenPropTypes from 'proptypes/children.prop';

import Logo from './components/Logo';
import UserBlock from './components/UserBlock';

import './PageHeader.scss';

const PageHeader = ({children}) => {
  const match = useRouteMatch('/');
  const isMainPage = match.isExact;
  return (
    <header className="page-header movie-card__head">
      {isMainPage ? <Logo /> : <Logo logoComponent={Link} />}
      {children}
      <UserBlock />
    </header>
  );
};

PageHeader.propTypes = {
  children: childrenPropTypes,
};

export default PageHeader;
