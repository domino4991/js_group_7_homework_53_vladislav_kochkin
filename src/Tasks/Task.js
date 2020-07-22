import React from "react";
import "./Task.css";

const Task = (props) => {
    return (
        <div className='task'>
            <p className='task__text'>{props.text}</p>
            <button className='task__btn-close' onClick={props.removeTask}>&times;</button>
        </div>
    );
}

export default Task;