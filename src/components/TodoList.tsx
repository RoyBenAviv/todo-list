import React from 'react'
import { useHistory } from 'react-router-dom';



export const TodoList: React.FC<any> = ({todo, onRemoveTodo}) => {

    const history = useHistory()

        return (
            <li className='todo-list'>
                <span><i className="fa-solid fa-thumbtack"></i></span>
                <h3 style={todo.doneAt ? {textDecorationLine: 'line-through'}: {}}>{todo.title}</h3>
                <p>Importancy: {todo.importancy}</p>
                {todo.doneAt && <p>Done at: {todo.doneAt}</p>}
                <div className="actions">
                <button title="Edit todo" onClick={() => history.push(`todo/edit/${todo._id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button title="Remove todo" onClick={() => onRemoveTodo(todo._id)}><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </li>
        );
}