import axios from 'axios';

const BaseUrl = process.env.BACKEND_URL

// const config = (token) => {
//     return {
//       headers: {
//         "x-access-token": `${token}`,
//       },
//     };
//   };

export const getProduct = () => {
  const URL = `${BaseUrl}api/products?limit=5`;
  // console.log('util', URL);
  return axios.get(URL);
}