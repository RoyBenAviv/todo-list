import React from 'react'
import { useForm } from '../hooks/useForm';



export const TodoFilter: React.FC<any> = ({setFilter}) => {

    const [filterBy, handleChange] = useForm({title: '', doneAt: ''})


        return (
            <section className='todo-filter'>
                <form onSubmit={(event) => setFilter(event, filterBy)}>
                <input onChange={handleChange} value={filterBy.title} type="text" name="title" />
                <input onChange={handleChange} value={filterBy.doneAt} type="date" name="doneAt" />
                <button>Search</button>
                </form>
            </section>
        );
}