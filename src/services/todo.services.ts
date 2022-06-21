import axios, { AxiosResponse } from 'axios';
import { Todo } from '../models/todo.model';

axios.defaults.withCredentials = true

export const todoService = {
    query,
    getEmptyTodo,
    getById,
    remove,
    save
};

function _getUrl(id: string = ''): string {
    const BASE_URL: "/api/todo" | "//localhost:3030/api/todo" =
    process.env.NODE_ENV !== 'development'
    ? '/api/todo'
    : '//localhost:3030/api/todo'
    return `${BASE_URL}/${id}`
}

async function query(): Promise<Todo[]> {
    const res: AxiosResponse = await axios.get(_getUrl())
        return res.data
}

async function getById(todoId: string): Promise<Todo> {
    const res: AxiosResponse = await axios.get(_getUrl(todoId))
        return res.data
}

function remove(todoId: string): {} {
    return axios.delete(_getUrl(todoId));
}

async function save(todo: Todo): Promise<Todo> {
    if (todo._id) {
        const res: AxiosResponse = await axios.put(_getUrl(todo._id), todo)
        return res.data
    } 
    else {
        const res: AxiosResponse = await axios.post(_getUrl(), todo)
        return res.data
    } 
}


function getEmptyTodo(): Todo {
    return {
        title: '',
        importancy: 0,
        doneAt: ''
    };
}