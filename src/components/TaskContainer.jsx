import React from 'react'

const TaskContainer = ({ children, heading }) => {
    return (
        <div className='shadow flex-1 bg-slate-100 rounded-xl p-2  w-96'>
            <h2 className='text-xl font-semibold text-center text-gray-700'>{heading}</h2>
            {children}
        </div>
    )
}

export default TaskContainer