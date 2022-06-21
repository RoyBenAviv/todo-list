import axios from 'axios';

axios.defaults.withCredentials = true

export const todoService = {
    query
};

function _getUrl(id = '') {
    const BASE_URL =
    process.env.NODE_ENV !== 'development'
    ? '/api/todo'
    : '//localhost:3030/api/todo'
    return `${BASE_URL}/${id}`
}

async function query() {
    const res = await axios.get(_getUrl())
        return res.data
}