import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './app/app.reducer';
import authReducer from './auth/auth.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['auth', 'app'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export default persistReducer(persistConfig, rootReducer);
