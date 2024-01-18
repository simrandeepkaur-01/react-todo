import React, { useContext } from 'react'
import { TodosContext } from '../contexts/todosContext';

const TaskContainer = ({ direction, handleStatus, heading }) => {
    const { tasks } = useContext(TodosContext);

    return (
        <div className='shadow flex-1 bg-slate-100 rounded-xl p-2  w-96'>
            <h2 className='text-xl font-semibold text-center text-gray-700'>{heading}</h2>
            <ul className='space-y-2' >
                {
                    tasks.map((task) => (
                        task.direction === direction && (
                            <li key={task.id} className='space-x-2 flex items-center'>
                                <input onChange={handleStatus} checked={task.isComplete} type="checkbox" name={task.id} id={task.id} />
                                <label htmlFor={task.id}>{task.taskName}</label>
                            </li>
                        )
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskContainer