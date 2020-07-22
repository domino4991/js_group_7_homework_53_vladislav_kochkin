import React from "react";
import './AddTasks.css';

const AddTasks = (props) => {
    return (
        <div className="add-tasks-box">
            <form className="add-tasks__form">
                <input type="text" className="add-tasks__text" placeholder="Enter your task here..."/>
                <button type="submit" className="add-tasks__btn">Add Task</button>
            </form>
        </div>
    );
}

export default AddTasks;