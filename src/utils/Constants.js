/* eslint-disable no-undef */
export const CURRENCY_LIST = [
  {
    label: 'USD',
    value: 'usd',
  },
  {
    label: 'EUR',
    value: 'eur',
  },
  {
    label: 'GBP',
    value: 'gbp',
  },
  {
    label: 'JPY',
    value: 'jpy',
  },
  {
    label: 'CAD',
    value: 'cad',
  },
  {
    label: 'AUD',
    value: 'aud',
  },
  {
    label: 'CHF',
    value: 'chf',
  },
  {
    label: 'CNY',
    value: 'cny',
  },
  {
    label: 'SEK',
    value: 'sek',
  },
];
export const MONTH_LIST = [
  {
    label: 'January',
    value: 'january',
  },
  {
    label: 'February',
    value: 'february',
  },
  {
    label: 'March',
    value: 'march',
  },
  {
    label: 'April',
    value: 'april',
  },
  {
    label: 'May',
    value: 'may',
  },
  {
    label: 'June',
    value: 'june',
  },
  {
    label: 'July',
    value: 'july',
  },
  {
    label: 'August',
    value: 'august',
  },
  {
    label: 'September',
    value: 'september',
  },
  {
    label: 'October',
    value: 'october',
  },
  {
    label: 'November',
    value: 'november',
  },
  {
    label: 'December',
    value: 'december',
  },
];
export const MEASUREMENT_LIST = [
  {
    label: 'Tone',
    value: 'tone',
  },
];
const Constants = {
  BACKEND_URL:
    process.env.REACT_APP_MODE !== 'dev' ? process.env.REACT_APP_BACKEND_URL : process.env.REACT_APP_BACKEND_URL_TEST,
  ACCESS_TOKEN: 'access_token',
  RESET_APP: 'store/reset',
  SIDEBAR_WIDTH: 298,
  SIDEBAR_MINI_WIDTH: 108,
};

export default Constants;
