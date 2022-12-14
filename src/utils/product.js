import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

const config = (token) => {
    return {
      headers: {
        "x-access-token": `${token}`,
      },
    };
  };

export const getProduct = () => {
  const URL = `${BaseUrl}api/products?limit=5`;
  // console.log('util', URL);
  return axios.get(URL);
}

export const getAllProduct = (query) => {
  const URL = `${BaseUrl}api/products?limit=6`;
  // console.log('util', URL);
  return axios.get(URL, {params: query});
}

export const getProductDetail = (id, token) => {
  const URL = `${BaseUrl}api/products/${id}`
  return axios.get(URL, id, config(token))
}

export const getPromoDetail = (id, token) => {
  const URL = `${BaseUrl}api/promos/${id}`
  // console.log(URL)
  return axios.get(URL, id, config(token))
}

export const createProduct = (body, token) => {
  const URL = `${BaseUrl}api/products/`
  return axios.post(URL, body, config(token))
}

export const getPromo = (query) => {
  const URL = `${BaseUrl}api/promos?limit=6`;
  // console.log('util', URL);
  return axios.get(URL, {params: query});
}

export const createPromo = (body, token) => {
  const URL = `${BaseUrl}api/promos/`
  return axios.post(URL, body, config(token))
}

export const editProduct = (id, body, token) => {
  const URL = `${BaseUrl}api/products/${id}`
  // console.log(URL)
  return axios.patch(URL, body, config(token))
}

export const editPromo = (id, body, token) => {
  const URL = `${BaseUrl}api/promos/${id}`
  // console.log(URL)
  return axios.patch(URL, body, config(token))
}