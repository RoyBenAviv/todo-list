import React from 'react'
import { useHistory } from 'react-router-dom';



export const TodoList: React.FC<any> = ({todo, onRemoveTodo}) => {

    const history = useHistory()

        return (
            <li className='todo-list'>
                <h3 style={todo.doneAt ? {textDecorationLine: 'line-through'}: {}}>{todo.title}</h3>
                <p>Importancy: {todo.importancy}</p>
                {todo.doneAt && <p>Done at: {todo.doneAt}</p>}
                <div className="actions">
                <button onClick={() => history.push(`todo/edit/${todo._id}`)}>Edit</button>
                <button onClick={() => onRemoveTodo(todo._id)}>Remove</button>
                </div>
            </li>
        );
}