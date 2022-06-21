import axios from 'axios';
import { Todo } from '../models/todo.model';

axios.defaults.withCredentials = true

export const todoService = {
    query,
    getEmptyTodo,
    getById,
    remove,
    save
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

async function getById(todoId: string) {
    const res = await axios.get(_getUrl(todoId))
        return res.data
}

function remove(todoId: string) {
    return axios.delete(_getUrl(todoId));
}

function save(todo: Todo) {
    if (todo._id) return axios.put(_getUrl(todo._id), todo).then(res => res.data);
    else return axios.post(_getUrl(), todo).then(res => res.data);
}


function getEmptyTodo(): Todo {
    return {
        title: '',
        importancy: 0,
        doneAt: null
    };
}