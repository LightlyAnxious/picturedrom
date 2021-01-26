import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {fetchPromoMovie, selectPromo} from 'features/data';
import {setCurrentFilm} from 'features/cinema';
import PageHeader from 'components/common/PageHeader';

import './PromoMovie.scss';

const noop = () => {};
const PromoMovie = ({renderControls = noop}) => {
  const dispatch = useDispatch();
  const promo = useSelector(selectPromo, shallowEqual);

  useEffect(() => {
    dispatch(fetchPromoMovie());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentFilm(promo));
  }, [dispatch, promo]);

  if (promo) {
    const {name, released, genre, posterImage, backgroundImage} = promo;

    return (
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">Picturedrome</h1>

        <div className="main-container">
          <PageHeader />

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={posterImage} alt={name} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>
                {/* CardControls */}
                {renderControls(false, promo)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

PromoMovie.propTypes = {
  renderControls: PropTypes.func,
};

export {PromoMovie};
export default PromoMovie;
