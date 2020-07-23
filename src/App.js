import React, {useState} from 'react';
import {nanoid} from "nanoid";
import './App.css';
import Task from "./Tasks/Task";
import AddTasks from "./AddTasks/AddTasks";

const App = () => {
  const [tasks, setTasks] = useState({
      tasksList: [
          {task: 'Buy milk', id: nanoid(6), done: false, className: 'task'},
          {task: 'Do homework', id: nanoid(6), done: false, className: 'task'},
          {task: 'Read book', id: nanoid(6), done: false, className: 'task'},
      ],
      newTask: '',
  });

  const addNewTask = event => {
      let newTask = event.target.value;
      setTasks(state => ({...state, newTask}));
  }

  const addNewTaskInList = event => {
      event.preventDefault();
      if(tasks.newTask) {
          const tasksList = [...tasks.tasksList];
          const newTask = tasks.newTask;
          tasksList.push({task: newTask, id: nanoid(6), done: false, className: 'task'});
          setTasks({tasksList, newTask: ''});
      }
  }

  const removeTask = id => {
      const index = tasks.tasksList.findIndex(t => t.id === id);
      const tasksList = [...tasks.tasksList];
      tasksList.splice(index, 1);
      setTasks({tasksList, newTask: ''});
  }

  const doneTask = id => {
      const index = tasks.tasksList.findIndex(d => d.id === id);
      const tasksList = [...tasks.tasksList];
      tasksList[index].done = !tasksList[index].done;
      if(tasksList[index].done) {
          tasksList[index].className += ' done-task';
      } else {
          tasksList[index].className = 'task';
      }
      setTasks(state => ({tasksList, ...state}));
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
        {tasks.tasksList.map((item) => <Task
            key={item.id}
            id={item.id}
            className={item.className}
            doneTask={() => doneTask(item.id)}
            text={item.task}
            removeTask={() => removeTask(item.id)}
        />)}
      </div>
    </div>
  );
}

export default App;
