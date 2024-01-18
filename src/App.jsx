import AddTask from './components/AddTask'
import React, { useState } from 'react';
import { TodosContext } from './contexts/todosContext'

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState({
    id: Date.now(),
    taskName: '',
    isComplete: false,
    direction: 'left'
  });

  return (
    <>
      <TodosContext.Provider value={{ tasks, setNewTask, setTasks, newTask }}>
        <AddTask />
      </TodosContext.Provider>
    </>
  )
}

export default App