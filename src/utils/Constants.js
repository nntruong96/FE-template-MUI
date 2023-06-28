/* eslint-disable no-undef */
const Constants = {
  BACKEND_URL:
    process.env.REACT_APP_MODE !== 'dev' ? process.env.REACT_APP_BACKEND_URL : process.env.REACT_APP_BACKEND_URL_TEST,
  ACCESS_TOKEN: 'access_token',
  RESET_APP: 'store/reset',
  SIDEBAR_WIDTH: 240,
};

export default Constants;
