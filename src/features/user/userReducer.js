import {extend, snakeToCamelObjAdapter} from 'utils/common';
import {AuthorizationStatus} from 'utils/const';
import ActionType from './actionTypes';

const initialState = {
  authStatus: AuthorizationStatus.NOT_AUTHORIZED,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST_AUTHORIZATION:
      return extend(
        state,
        {
          authStatus: action.payload
            ? AuthorizationStatus.AUTHORIZED
            : AuthorizationStatus.NOT_AUTHORIZED,
        },
        snakeToCamelObjAdapter(action.payload)
      );

    default:
      return state;
  }
};

export {user};
export default user;
