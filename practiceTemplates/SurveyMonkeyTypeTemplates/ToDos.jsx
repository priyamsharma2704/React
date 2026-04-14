import React from 'react'
import ReactDOM from 'react-dom/client'

const { useState } = React;

const addTodo = (todos, text) => {
    // Task 1A
    // Add a new todo object to the list
    // Each todo should have: id, text, completed
    return todos;
};

const toggleTodo = (todos, id) => {
    // Task 1B
    // Toggle the completed field of the todo with matching id
    return todos;
};

const deleteTodo = (todos, id) => {
    // Task 2A
    // Remove the todo with matching id from the list
    return todos;
};

const RemainingCount = ({ todos }) => {
    // Task 2B
    // Display the number of todos that are NOT completed
    return <div>Remaining: 0</div>;
};

const FilterBar = ({ filter, onFilterChange }) => {
    // Task 3
    // Render three buttons: All, Active, Done
    // Clicking a button updates the current filter
    // Highlight the active filter button
    return <div>Add filter buttons here</div>;
};

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <div style={{ display: 'flex', gap: 8, padding: '6px 0' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>x</button>
        </div>
    );
};

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy groceries', completed: false },
        { id: 2, text: 'Walk the dog', completed: true },
    ]);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'done'

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos(addTodo(todos, input));
        setInput('');
    };

    // Task 3 — filter the list based on current filter value before rendering
    const visibleTodos = todos;

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}>
            <h2>Todo list</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add a task..."
                    style={{ flex: 1 }}
                />
                <button type="submit">Add</button>
            </form>
            <FilterBar filter={filter} onFilterChange={setFilter} />
            <RemainingCount todos={todos} />
            {visibleTodos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={id => setTodos(toggleTodo(todos, id))}
                    onDelete={id => setTodos(deleteTodo(todos, id))}
                />
            ))}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App /></React.StrictMode>
);