import React from 'react';
import PropTypes from 'prop-types';

import filmProptypes from 'proptypes/film.prop';

import {TabBar, TabBarItem} from 'components/shared/TabBar';
import MovieOverview from './components/MovieOverview';
import MovieDetails from './components/MovieDetails';
import MovieReviews from './components/MovieReviews';

const MovieNavigation = ({className, film}) => (
  <TabBar className={className}>
    <TabBarItem label="Overview">
      <MovieOverview film={film} />
    </TabBarItem>
    <TabBarItem label="Details">
      <MovieDetails film={film} />
    </TabBarItem>
    <TabBarItem label="Reviews">
      <MovieReviews />
    </TabBarItem>
  </TabBar>
);

MovieNavigation.propTypes = {
  className: PropTypes.string,
  film: filmProptypes,
};

export default MovieNavigation;
