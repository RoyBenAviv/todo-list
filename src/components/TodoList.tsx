import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Todo } from '../models/todo.model';



export const TodoList: React.FC<any> = ({todo, onRemoveTodo}) => {

    const history = useHistory()

        return (
            <li className='todo-list'>
                <h3>{todo.title}</h3>
                <p>Importancy: {todo.importancy}</p>
                
                <button onClick={() => history.push(`todo/edit/${todo._id}`)}>Edit</button>
                <button onClick={() => onRemoveTodo(todo._id)}>Remove</button>
            </li>
        );
}