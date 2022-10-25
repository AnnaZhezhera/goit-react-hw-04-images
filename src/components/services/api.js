import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const REACT_APP_API_KEY = '29521518-5bff3e3ab528698c58648398d';
axios.defaults.params = {
  key: REACT_APP_API_KEY,
  per_page: 12,
};

export const getImages = async (search, page) => {
  const response = await axios.get(
    '?q=' + encodeURIComponent(search || '') + '&page=' + page
  );
  console.log('api.js', response.data);
  return response.data;
};
