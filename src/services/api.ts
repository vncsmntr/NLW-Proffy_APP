import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nlw-proffyapi.herokuapp.com/',
})

export default api;