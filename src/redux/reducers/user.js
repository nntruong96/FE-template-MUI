import { createSlice } from '@reduxjs/toolkit';
import Constants from 'utils/Constants';
import { eraseCookie, readCookie } from 'utils/cookies';
const initialState = () => {
  let access_token = readCookie(Constants.ACCESS_TOKEN);
  return {
    hasFetched: false,
    isFetching: false,
    isLogin: access_token ? true : false,
    data: {},
  };
};

const userReducers = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetApp: () => {
      eraseCookie(Constants.ACCESS_TOKEN);
      initialState();
    },
  },
});
export const { resetApp } = userReducers.actions;
export default userReducers.reducer;
