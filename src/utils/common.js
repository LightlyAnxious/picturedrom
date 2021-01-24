import dayjs from 'dayjs';
import screenfull from 'screenfull';

import {RATINGS} from './const';

const duration = require('dayjs/plugin/duration');
const utc = require('dayjs/plugin/utc');

dayjs.extend(duration);
dayjs.extend(utc);

const numberToStringRating = {
  0: RATINGS.BAD,
  1: RATINGS.BAD,
  2: RATINGS.BAD,
  3: RATINGS.NORMAL,
  4: RATINGS.NORMAL,
  5: RATINGS.GOOD,
  6: RATINGS.GOOD,
  7: RATINGS.GOOD,
  8: RATINGS.VERY_GOOD,
  9: RATINGS.VERY_GOOD,
  10: RATINGS.AWESOME,
};
/* eslint-disable */
const debounce = (callback, wait) => {
  let timeout = null;
  return (...args) => {
    const next = () => callback(...args);
    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
  };
};
/* eslint-enable */

const formatDate = date => dayjs(date).locale('en-US').format('MMMM D, YYYY');

const formatRunTime = (time, timeUnit, timeFormat) => {
  const filmDuration = dayjs.duration(time, timeUnit);

  if (!timeFormat) {
    return filmDuration.asSeconds();
  }

  return dayjs.utc(filmDuration.asMilliseconds()).format(timeFormat);
};

const snakeToCamel = str =>
  str.replace(/([-_]\w)/g, group => group[1].toUpperCase());

const snakeToCamelObjAdapter = snakeObj => {
  const camelObj = {};

  Object.entries(snakeObj).forEach(entry => {
    const renamedEntry = {
      [snakeToCamel(entry[0])]: entry[1],
    };
    /* eslint-disable */
    Object.assign(camelObj, renamedEntry);
  });
  /* eslint-enable */

  return camelObj;
};

const numberToStringWithComma = number => number.toString().replace(/\./, ',');

function getStringRating(rating) {
  const roundedRating = Math.round(rating);

  return numberToStringRating[roundedRating];
}

function extend(...args) {
  return Object.assign({}, ...args);
}

function pushToHistory(history, route) {
  /* eslint-disable */
  history.push(route);

  return history;
}
/* eslint-enable */

function removeColon(it) {
  const filteredIt = () => it.replace(':', '');

  return filteredIt();
}

function findMovieByName(name, movies) {
  return movies.find(movie => movie.name === name);
}

const scrollToTop = () => window.scrollTo(0, 0);

const toggleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle();
  }
};

export {
  numberToStringWithComma,
  getStringRating,
  extend,
  snakeToCamelObjAdapter,
  pushToHistory,
  scrollToTop,
  removeColon,
  findMovieByName,
  snakeToCamel,
  formatDate,
  formatRunTime,
  toggleFullScreen,
  debounce,
};
