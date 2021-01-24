import actionTypes from './actionTypes';

const initialState = {
  setup: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
