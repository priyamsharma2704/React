import React from 'react'
import ReactDOM from 'react-dom/client'

const { useState, useEffect, useRef } = React;

const useDebounce = (value, delay) => {
    // Task 1A
    // Return a debounced version of `value` that only updates
    // after `delay` ms have passed since the last change.
    // Hint: useEffect + setTimeout + clearTimeout on cleanup
    return value;
};

const usePrevious = (value) => {
    // Task 2A
    // Return the value from the *previous* render.
    // Hint: useRef persists across renders without causing re-renders
    return undefined;
};

const useSearch = (query) => {
    // Task 3
    // Compose useDebounce and a fetch call into a single hook.
    // Return { results, loading, debouncedQuery }
    // Only fetch when debouncedQuery is non-empty
    return { results: [], loading: false, debouncedQuery: query };
};

const ChangeIndicator = ({ current }) => {
    // Task 2B
    // Use usePrevious to show "changed from X → Y" when the value changes
    // Show nothing on the first render
    const previous = usePrevious(current);
    return (
        <div style={{ fontSize: 12, color: '#888', minHeight: 20 }}>
            {/* show previous → current here */}
        </div>
    );
};

const SearchResults = ({ results, loading }) => {
    if (loading) return <p>Loading...</p>;
    if (!results.length) return <p style={{ color: '#888' }}>No results</p>;
    return (
        <ul>
            {results.map(r => <li key={r.id}>{r.title}</li>)}
        </ul>
    );
};

const App = () => {
    const [query, setQuery] = useState('');
    const { results, loading, debouncedQuery } = useSearch(query);

    return (
        <div style={{ maxWidth: 480, margin: '2rem auto', fontFamily: 'sans-serif' }}>
            <h2>Debounced search</h2>
            <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Type to search..."
                style={{ width: '100%', marginBottom: 8 }}
            />
            <ChangeIndicator current={debouncedQuery} />
            <SearchResults results={results} loading={loading} />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App /></React.StrictMode>
);