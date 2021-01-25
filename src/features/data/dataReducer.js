import actionType from './actionTypes';

const initialState = {
  films: [],
  favorite: [],
  promo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    case actionType.LOAD_PROMO:
      return {...state, promo: action.payload};

    default:
      return state;
  }
};

export default reducer;
