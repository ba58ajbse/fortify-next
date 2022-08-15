import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
