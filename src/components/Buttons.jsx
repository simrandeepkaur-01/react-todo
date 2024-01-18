import React, { useContext } from 'react'
import { TodosContext } from '../contexts/todosContext'

export default function Buttons() {
    const { tasks, setTasks } = useContext(TodosContext);

    const handleRightDirection = () => {
        setTasks(tasks.map((todo) => {
            if (todo.isComplete === true) {
                return {
                    ...todo,
                    direction: 'right',
                };
            } else {
                return todo;
            }
        }));
    };

    const handleLeftDirection = () => {
        setTasks(tasks.map((todo) => {
            if (todo.isComplete === false) {
                return {
                    ...todo,
                    direction: 'left',
                };
            } else {
                return todo;
            }
        }));
    };

    return (
        <div className='flex flex-col'>
            {/* left button */}
            <button className='p-0' onClick={handleLeftDirection}>
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </button>

            {/* right button */}
            <button className='p-0' onClick={handleRightDirection}>
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </button>
        </div>
    )
}