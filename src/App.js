import React, {useState} from 'react';
import {nanoid} from "nanoid";
import './App.css';
import Task from "./Tasks/Task";
import AddTasks from "./AddTasks/AddTasks";

const App = () => {
  const [tasks, setTasks] = useState({
      tasksList: [
          {task: 'Buy milk', id: nanoid(6)},
          {task: 'Do homework', id: nanoid(6)},
          {task: 'Read book', id: nanoid(6)},
      ],
      newTask: '',
  });

  const addNewTask = event => {
      let newTask = event.target.value;
      setTasks(state => ({...state, newTask}));
  }

  const addNewTaskInList = event => {
      event.preventDefault();
      const tasksList = [...tasks.tasksList];
      const newTask = tasks.newTask;
      tasksList.push({task: newTask, id: nanoid(6)});
      setTasks({tasksList, newTask: ""});
  }

  return (
    <div className="App">
      <div className="container">
          <h1 className="title">ToDo List</h1>
          <AddTasks
              newTask={tasks.newTask}
              onAddNewTask={event => addNewTask(event)}
              onAddNewTaskInList={event => addNewTaskInList(event)}
          />
        {tasks.tasksList.map((item) => <Task key={item.id} text={item.task}/>)}
      </div>
    </div>
  );
}

export default App;
