import axios from 'axios';

axios.defaults.baseURL = 'https://www.anapioficeandfire.com/api/';

export const fetchers = {
  getBooks: () => axios.get('books'),
};
