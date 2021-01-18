import { authTypes } from './auth.types';

const INITIAL_STATE = {
  isAuthenticated: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      return { ...state, isAuthenticated: true };

    case authTypes.LOGOUT:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};

export default authReducer;
