import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://648dc0c62de8d0ea11e82d21.mockapi.io',
});

export const serviseGetCars = async page => {
  try {
    const response = await instance.get('/adverts', {
      params: { page: page, limit: 8 },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
