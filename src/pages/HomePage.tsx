import React, { useEffect, useState } from 'react'
import { todoService } from '../services/todo.services'
import { TodoList } from '../components/TodoList'
import { Todo } from '../models/todo.model'
import { Link } from 'react-router-dom'
export const HomePage: React.FC = () => {

    const [todos, setTodos] = useState<null | Todo[]>(null)
    useEffect(() => {
        loadTodos()
    }, [todos])

    const loadTodos = async(): Promise<void> => {
        const todos = await todoService.query()
        setTodos(todos)
    }

    const onRemoveTodo = (todoId: string) => {
        todoService.remove(todoId)
    }

    if(!todos) return <div>loading...</div>
     return (
         <main className='home-page'>
            <ul>
                {todos.map(todo => (
                    <TodoList key={todo._id} todo={todo} onRemoveTodo={onRemoveTodo} />
                ))}
                <Link to='/todo/edit/'>
                <li className="add-todo">
                    Add Todo
                </li>
                </Link>
            </ul>
         </main>
     )
 }