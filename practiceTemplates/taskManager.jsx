/*
Implement toggling completion.

Add sorting by priority or alphabetical.

Add a filter: show all / completed / incomplete.

Compute and display:

number of completed tasks

number of high‑priority tasks

Ensure sorting and filtering are memoized.
*/

const initialTasks = [
    { name: "Refactor API layer", priority: "high", done: false },
    { name: "Write unit tests", priority: "medium", done: false },
    { name: "Update CI pipeline", priority: "low", done: true },
];

function TaskManager() {
    const [tasks, setTasks] = useState(initialTasks);
    const [sortBy, setSortBy] = useState("none");
    const [filter, setFilter] = useState("all");

    return (
        <div>
            {/* TODO: Sorting dropdown */}
            {/* TODO: Filter dropdown */}

            {tasks.map((t) => (
                <div key={t.name}>
                    <input type="checkbox" /* TODO */ />
                    <span>{t.name}</span>
                    <span>{t.priority}</span>
                </div>
            ))}

            <div>Completed: {/* TODO */}</div>
            <div>High Priority: {/* TODO */}</div>
        </div>
    );
}
