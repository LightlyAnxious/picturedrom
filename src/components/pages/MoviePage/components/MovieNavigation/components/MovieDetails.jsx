import React from 'react';

import filmProptypes from 'proptypes/film.prop';
import {formatRunTime} from 'utils/common';
import {TimeUnit, RunTimeFormat} from 'utils/const';

const MovieDetails = ({film}) => {
  const {director, starring, runTime, genre, released} = film;

  const formatDetailsRunTime = () => {
    const hours = formatRunTime(runTime, TimeUnit.MINUTES, RunTimeFormat.HOUR);

    const minutes = formatRunTime(
      runTime,
      TimeUnit.MINUTES,
      RunTimeFormat.MINUTE
    );

    return `${hours}h ${minutes}m`;
  };

  const formattedRunTime = formatDetailsRunTime();

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          {starring.map(actor => (
            <span className="movie-card__details-value" key={actor}>
              {' '}
              {actor}, <br />
            </span>
          ))}
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formattedRunTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  film: filmProptypes,
};

export default MovieDetails;
