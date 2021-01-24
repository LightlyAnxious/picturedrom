import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import Logo from './components/Logo';
import UserBlock from './components/UserBlock';

import './PageHeader.scss';

const PageHeader = () => {
  const match = useRouteMatch('/');
  const isMainPage = match.isExact;
  return (
    <header className="page-header movie-card__head">
      {isMainPage ? <Logo /> : <Logo Component={Link} />}
      <UserBlock />
    </header>
  );
};

export default PageHeader;
