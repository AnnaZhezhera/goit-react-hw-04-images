import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const REACT_APP_API_KEY = '29521518-5bff3e3ab528698c58648398d';
// axios.defaults.params = {};
// axios.defaults.params['key'] = REACT_APP_API_KEY;
// axios.defaults.params['q'] = encodeURIComponent(search || '');
// axios.defaults.params['per_page'] = PER_PAGE;
// axios.defaults.params['page'] = 1;
axios.defaults.params = {
  key: REACT_APP_API_KEY,
  per_page: 12,
};

// axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY;

// const URL = `?q=${this.state.searchQuery}&page=1&image_type=photo&orientation=horizontal&per_page=12`;
// const URL = '?q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12';

export const getImages = async (search, page) => {
  const response = await axios.get(
    '?q=' + encodeURIComponent(search || '') + '&page=' + page
  );
  console.log(response.data);
  return response.data;
};
