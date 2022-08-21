import Axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost' : ''

const axios = Axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
