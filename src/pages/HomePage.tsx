import React, { useEffect, useState } from 'react'
import { todoService } from '../services/todo.services'
import { TodoList } from '../components/TodoList'
import { Todo } from '../models/todo.model'
export const HomePage: React.FC = () => {

    const [todos, setTodos] = useState<null | Todo[]>(null)
    useEffect(() => {
        loadTodos()
        console.log(todos)
    }, [])

    const loadTodos = async(): Promise<void> => {
        const todos = await todoService.query()
        setTodos(todos)
    }

    if(!todos) return <div>loading...</div>
     return (
         <main>
            <ul>
                {todos.map(todo => (
                    <TodoList key={todo._id} todo={todo} />
                ))}
            </ul>
         </main>
     )
 }