import React from "react";
import "./Task.css";

const Task = (props) => {
    return (
        <div className={props.className}>
            <input type="checkbox" className="done-checkbox" name="done-task" id={props.id} checked={props.done} onChange={props.doneTask}/>
            <label className='task__text' htmlFor={props.id}>{props.text}</label>
            <button className='task__btn-close' onClick={props.removeTask}>&times;</button>
        </div>
    );
}

export default Task;