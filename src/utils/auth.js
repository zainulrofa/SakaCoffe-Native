import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

export const register = body => {
  const URL = `${BaseUrl}api/auths/register`;
  // console.log('util', URL);
  return axios.post(URL, body);
}

export const login = body => {
  const URL = `${BaseUrl}api/auths/login`;
  // console.log('util', body);
  return axios.post(URL, body);
};

export const forgot = body => {
  const URL = `${BaseUrl}api/auths/forgot-password`;
  // console.log('util', body);
  return axios.patch(URL, body);
};

export const reset = body => {
  const URL = `${BaseUrl}api/auths/reset-password`;
  // console.log('util', body);
  return axios.patch(URL, body);
};

export const logout = body => {
  const URL = `${BaseUrl}api/auths/logout`;
  // console.log('util', body);
  return axios.patch(URL, body);
};