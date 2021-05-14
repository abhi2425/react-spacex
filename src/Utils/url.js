import axios from 'axios'

export const BASE_URL = 'https://api.spacexdata.com/v3/'
axios.defaults.baseURL = BASE_URL

export { axios }
