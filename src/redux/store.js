import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import snackbar from './reducers/snackbar';
import { eraseCookie } from 'utils/cookies';
import Constants from 'utils/Constants';

const reducers = { user, snackbar };
const rootReducer = combineReducers(reducers);

const resettableRootReducer = (state, action) => {
  if (action.type === Constants.RESET_APP) {
    eraseCookie(Constants.ACCESS_TOKEN);
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: resettableRootReducer,
});
