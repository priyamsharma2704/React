import Check from "../../assets/check.png";
import Delete from "../../assets/close.png";
import { useState } from "react";
function TasksList({ tasks, setTasks }) {
    const [isTaskChecked, setIsTaskChecked] = useState(false);
    function handleCheck(idx: number) {
        console.log("Edit");
        setIsTaskChecked(!isTaskChecked);
    }

    function handleDelete(idx: number) {
        let dupTasks = [...tasks];
        dupTasks.splice(idx, 1);
        setTasks(dupTasks);
    }

    return (
        <>
            <div className="tasksList">
                {tasks.map((task: string, idx: number) => (
                    <div className="divTask" key={idx}>
                        <span>{task}</span>
                        <span
                            className="controls"
                            onClick={() => handleDelete(idx)}
                        >
                            <img src={Delete}></img>
                        </span>
                        <span
                            className="controls checkTask"
                            onClick={() => handleCheck(idx)}
                        >
                            <img src={Check}></img>
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TasksList;
