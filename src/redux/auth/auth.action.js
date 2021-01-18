import { authTypes } from './auth.types';

export const login = () => ({
  type: authTypes.LOGIN,
  payload: true,
});

export const logout = () => ({
  type: authTypes.LOGOUT,
});
