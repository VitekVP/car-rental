import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://648dc0c62de8d0ea11e82d21.mockapi.io',
});

export const getCars = async () => {
  const response = await instance.get('/adverts');
  return response.data;
};
