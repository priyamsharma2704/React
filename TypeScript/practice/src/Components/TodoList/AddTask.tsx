import { useState } from "react";
function AddTask({ addTask }) {
    const [input, setInput] = useState("");
    function handleTaskInput(e: any) {
        setInput(e.target.value);
    }
    function handleAdd() {
        console.log(input);
        if (input == "" || undefined) {
            alert("Please enter a task.");
            return;
        }
        addTask((prev: any) => [...prev, input]);
        setInput("");
    }
    return (
        <div>
            <input
                className="addTaskInput"
                type="text"
                placeholder="Add a task ..."
                onChange={(e) => handleTaskInput(e)}
                value={input}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default AddTask;
