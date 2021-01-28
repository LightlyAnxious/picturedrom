import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';

import {selectReviews} from 'features/cinema';
import {numberToStringWithComma, formatDate} from 'utils/common';

import './MovieReviews.scss';

const MovieReviews = () => {
  const reviews = useSelector(selectReviews, shallowEqual);
  const renderReview = filmReview => {
    const {
      user: {name, id},
      comment,
      rating,
      date,
    } = filmReview;
    const correctDate = formatDate(date);
    const correctRating = numberToStringWithComma(rating);

    return (
      <div key={`${Math.random()}-${id}`} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{name}</cite>
            <time className="review__date" dateTime={correctDate}>
              {correctDate}
            </time>
          </footer>
        </blockquote>

        <div className="review__rating">{correctRating}</div>
      </div>
    );
  };
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews ? reviews.map(review => renderReview(review)) : null}
      </div>
    </div>
  );
};

export default MovieReviews;
