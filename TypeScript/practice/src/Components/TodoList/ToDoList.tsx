import AddTask from "./AddTask";
import TasksList from "./TasksList";
import { useState, useEffect } from "react";
function ToDoList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // console.log(tasks);
    }, [tasks]);
    return (
        <>
            <div className="ToDoList">
                <AddTask addTask={setTasks}></AddTask>
                <TasksList setTasks={setTasks} tasks={tasks}></TasksList>
            </div>
        </>
    );
}

export default ToDoList;
