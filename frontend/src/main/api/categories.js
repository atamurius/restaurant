import axios from 'axios'

export const list = ({ page, size, sort } = {}) =>
  axios.get('/api/categories', {
    params: { page, size, sort }
  });
