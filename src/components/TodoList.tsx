import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Todo } from '../models/todo.model';



export const TodoList: React.FC<any> = ({todo, onRemoveTodo}) => {

    const history = useHistory()

        return (
            <li className='todo-list' style={todo.doneAt && {textDecorationLine: 'line-through'}}>
                <h3>{todo.title}</h3>
                <p>Importancy: {todo.importancy}</p>
                {todo.doneAt && <p>Done at: {todo.doneAt}</p>}
                <button onClick={() => history.push(`todo/edit/${todo._id}`)}>Edit</button>
                <button onClick={() => onRemoveTodo(todo._id)}>Remove</button>
            </li>
        );
}