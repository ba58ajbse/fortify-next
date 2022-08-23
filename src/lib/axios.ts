import Axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

const axios = Axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
