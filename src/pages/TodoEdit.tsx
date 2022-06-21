import React, { FormEvent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { todoService } from '../services/todo.services'

export const TodoEdit: React.FC<any> = ({ match }) => {
  const [todo, handleChange, setTodo] = useForm(null)

  const history = useHistory()
  useEffect(() => {
    loadTodo()
    
  }, [])

  const loadTodo = async () => {
    const id = match.params.id
    const todo = id ? await todoService.getById(id) : todoService.getEmptyTodo()
    setTodo(todo)
  }

  const onSaveTodo = async (ev: FormEvent) => {
    ev.preventDefault()
    await todoService.save({ ...todo })
    history.push('/')
  }

  if (!todo) return <div>Loading...</div>
  return (
    <section className='todo-edit'>
      <h2>{todo._id ? 'Edit' : 'Add'} Todo</h2>
      <form onSubmit={onSaveTodo}>
        <label>
          Title:
          <input required placeholder="Add title" onChange={handleChange} value={todo.title} type="text" name="title" />
        </label>
        <label>
          Importancy:
          <input required onChange={handleChange} value={todo.importancy} type="number" name="importancy" min="1" max="3" />
        </label>
        <label>
            {'Task finished at (Optional)'}:
        <input type="date" onChange={handleChange} value={todo.doneAt} name="doneAt" />
        </label>
        <button>Save Todo</button>
      </form>
    </section>
  )
}
