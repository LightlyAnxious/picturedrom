const PLAY_DELAY = 1000;
const DEFAULT_GENRE = 'All genres';
const MAX_GENRES = 10;
const MAX_RATING = 5;
const VISIBLE_SIMILAR = 4;
const VISIBLE_ON_START = 8;
const VISIBLE_FILMS_COUNT = 8;
const CONTROLS__DELAY = 2000;
const UI_DELAY = 500;

const RATINGS = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};

const WindowSize = {
  MOBILE: 575,
  TABLET: 767,
  DESKTOP: 1139,
};

const RunTimeFormat = {
  PLAYER: 'H:mm:ss',
  HOUR: 'H',
  MINUTE: 'm',
  SECOND: 's',
};

const AuthorizationStatus = {
  AUTHORIZED: 'AUTHORIZED',
  NOT_AUTHORIZED: 'NOT_AUTHORIZED',
};

const IsFavoriteStatus = {
  FAVORITE: 1,
  NOT_FAVORITE: 0,
};

const AppRoute = {
  MAIN: '/',
  FILMS: '/films/',
  PLAYER: '/player/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
};

const ApiRoute = {
  FILMS: '/films',
  FAVORITE: '/favorite',
  PROMO: '/films/promo',
  LOGIN: '/login',
  COMMENTS: '/comments',
};

const TimeUnit = {
  SECONDS: 's',
  MINUTES: 'm',
};

export {
  TimeUnit,
  RunTimeFormat,
  WindowSize,
  VISIBLE_SIMILAR,
  VISIBLE_ON_START,
  VISIBLE_FILMS_COUNT,
  CONTROLS__DELAY,
  UI_DELAY,
  PLAY_DELAY,
  RATINGS,
  DEFAULT_GENRE,
  MAX_GENRES,
  MAX_RATING,
  AuthorizationStatus,
  IsFavoriteStatus,
  AppRoute,
  ApiRoute,
};
