import React, { FormEvent, useEffect, useState } from 'react'
import { todoService } from '../services/todo.services'
import { TodoList } from '../components/TodoList'
import { TodoFilter } from '../components/TodoFilter'
import { Todo } from '../models/todo.model'
import { Link } from 'react-router-dom'
export const HomePage: React.FC = () => {

    const [todos, setTodos] = useState<null | Todo[]>(null)
    const [filterBy, setFilterBy]: any = useState(null)
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

    const setFilter = (ev: FormEvent, filterBy: any) => {
        ev.preventDefault()
        setFilterBy(filterBy)
    }

    const todosToShow = () => {
        if (!filterBy) return todos;
        const regex = new RegExp(filterBy.title, 'i');
        return todos?.filter(todo => {
            return regex.test(todo.title)
        });
    }

    if(!todos) return <div>loading...</div>
     return (
         <main className='home-page'>
             <TodoFilter setFilter={setFilter}/>
            <ul>
                {todosToShow()?.map(todo => (
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