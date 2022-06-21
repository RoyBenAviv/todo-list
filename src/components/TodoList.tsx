import React, { useEffect } from 'react'
import { Todo } from '../models/todo.model';


export const TodoList: React.FC<any> = ({todo}) => {
        return (
            <li className='todo-list'>
                <h3>{todo.title}</h3>
                <p>Importancy: {todo.importancy}</p>
            </li>
        );
}