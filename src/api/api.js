import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://mytodolist-backend.herokuapp.com',
})

export default Api;