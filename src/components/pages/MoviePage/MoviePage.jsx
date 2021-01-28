import React, {memo, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

import {VISIBLE_SIMILAR, WindowSize} from 'utils/const';
import {findMovieById} from 'utils/filter';
import {getFilteredFilms} from 'features/data';
import {
  selectCurrentFilm,
  fetchComments,
  fetchCurrentFilm,
} from 'features/cinema';
import {useWindowSize} from 'hooks';

import ErrorPage from 'components/pages/ErrorPage';
import PageHeader from 'components/common/PageHeader';
import PageFooter from 'components/common/PageFooter';
import MovieList from 'components/common/MovieList';
import MovieNavigation from './components/MovieNavigation';

import './MoviePage.scss';

const MoviePage = ({renderControls}) => {
  const dispatch = useDispatch();
  const films = useSelector(getFilteredFilms, shallowEqual);
  const film = useSelector(selectCurrentFilm, shallowEqual);
  const id = Number(useParams().id);
  const [addHeight, setAddHeight] = useState(0);
  const heightRef = useRef();
  const windowSize = useWindowSize();
  const {width} = windowSize;
  const isTablet = width === WindowSize.TABLET;
  const isMobile = width === WindowSize.MOBILE;

  useEffect(() => {
    if (id) {
      dispatch(fetchComments(id));
      dispatch(fetchCurrentFilm(id));
    }
  }, [dispatch, id]);

  /* eslint-disable */
  useLayoutEffect(
    films.length
      ? () =>
          films.length &&
          setAddHeight(heightRef.current.getBoundingClientRect().height)
      : () => {},
    [films.length, isTablet, isMobile]
  );
  /* eslint-enable */

  if (!film && !id) {
    return <ErrorPage />;
  }

  if (!films.length) {
    return null;
  }

  const localFilm = findMovieById(id, films);

  const currentFilm = film || localFilm;
  const {name} = currentFilm;

  /* eslint-disable */
  const similarFilms = films
    .slice()
    .filter(processedFilm => processedFilm.id !== currentFilm.id)
    .splice(0, VISIBLE_SIMILAR);
  /* eslint-enable */

  const {
    posterImage = 'img/placeholder.jpg',
    backgroundImage = 'img/placeholder.jpg',
    backgroundColor = '#000000',
    genre = 'Genre',
    released = 2020,
  } = currentFilm;

  const background = backgroundColor;
  const addheight = isMobile ? addHeight : addHeight / 2;
  const pageStyle = {
    paddingBottom: addheight,
    background,
  };

  return (
    <>
      <section style={pageStyle} className="movie-card movie-card--full ">
        <div className="main-container">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <PageHeader />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>
                {/* Controls */}
                {renderControls(true, currentFilm)}
              </div>
            </div>
          </div>

          <div
            ref={heightRef}
            className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt={name} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <MovieNavigation className="movie-nav" film={currentFilm} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList films={similarFilms} />
        </section>

        <PageFooter />
      </div>
    </>
  );
};

MoviePage.propTypes = {
  renderControls: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export {MoviePage};
export default memo(MoviePage);
