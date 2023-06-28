import axios from 'axios';
import { readCookie } from 'utils/cookies';
import Constants from 'utils/Constants';
export default class Client {
  constructor(server) {
    this.url = (server || window.location.origin) + '/';
    this.client = axios.create({
      baseURL: this.url,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.client.interceptors.request.use(async (config) => {
      let access_token = readCookie(Constants.ACCESS_TOKEN);

      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    });
  }

  get(url, payload) {
    return this.client.get(url, payload || {});
  }

  post(url, payload) {
    return this.client.post(url, payload || {});
  }
  put(url, payload) {
    return this.client.put(url, payload || {});
  }
}
