import {DEFAULT_GENRE, VISIBLE_ON_START} from 'utils/const';
import {extend} from 'utils/common';
import ActionType from './actionTypes';

const initialState = {
  currentFilm: null,
  activeGenre: DEFAULT_GENRE,
  visible: VISIBLE_ON_START,
  genres: [],
  reviews: [],
  favorite: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_GENRES:
      return extend(state, {
        genres: action.payload,
      });

    case ActionType.SET_CURRENT:
      return extend(state, {
        currentFilm: action.payload,
      });

    case ActionType.LOAD_CURRENT:
      return extend(state, {
        currentFilm: action.payload,
      });

    case ActionType.SELECT_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.RESET_GENRES:
      return extend(state, {activeGenre: DEFAULT_GENRE});

    case ActionType.PREPARE_FILMS:
      return extend(state, {
        filteredFilms: action.payload,
      });

    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favorite: action.payload,
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });

    case ActionType.SET_VISIBLE_FILMS:
      return extend(state, {
        visible: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};
export default reducer;
