import React, { useContext } from 'react'
import { TodosContext } from '../contexts/todosContext';
import Buttons from './Buttons';
import TaskContainer from './TaskContainer';

export default function AddTask() {
    const { tasks, setNewTask, setTasks, newTask } = useContext(TodosContext);

    function handleInputChange(e) {
        setNewTask({
            ...newTask,
            taskName: e.target.value,
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setNewTask({
            id: Date.now(),
            taskName: '',
            isComplete: false,
            direction: 'left'
        })
    }

    const handleStatus = (e) => {
        setTasks(tasks.map((todo) => {
            if (todo.id == e.target.id) {
                return {
                    ...todo,
                    isComplete: e.target.checked,
                };
            } else {
                return todo;
            }
        }));
    };

    return (
        <section className='w-screen min-h-screen p-20 space-y-6'>
            <h1 className='text-3xl font-semibold'>Todos</h1>

            <form onSubmit={handleFormSubmit} className='space-x-4'>
                <input value={newTask.taskName} onChange={handleInputChange} placeholder='Add new task' type="text" className='border border-black p-1.5 rounded-md w-96' />
                <button className='bg-gray-200'>Add</button>
            </form>

            <section className='flex space-x-6 w-full'>

                <TaskContainer heading="Incompleted">
                    <ul className='space-y-2'>
                        {
                            tasks.map((task) => (
                                task.direction === 'left' && (
                                    <li key={task.id} className='space-x-2 flex items-center'>
                                        <input onChange={handleStatus} checked={task.isComplete} type="checkbox" name={task.id} id={task.id} />
                                        <label htmlFor={task.id}>{task.taskName}</label>
                                    </li>
                                )
                            ))
                        }
                    </ul>
                </TaskContainer>

                <Buttons />

                <TaskContainer heading="Complete">
                    <ul className='space-y-2'>
                        {
                            tasks.map((task) => (
                                task.direction === 'right' && (<li key={task.id}>
                                    <input onChange={handleStatus} checked={task.isComplete} type="checkbox" name={task.id} id={task.id} />
                                    <label htmlFor={task.id}>{task.taskName}</label>
                                </li>)
                            ))
                        }
                    </ul>
                </TaskContainer>

            </section>
        </section>
    )
}