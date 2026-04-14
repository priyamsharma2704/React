import React from 'react'
import ReactDOM from 'react-dom/client'

const { useState, useEffect, useRef, useCallback } = React;

const fetchPage = async (page, signal) => {
    // Simulated API — replace with real endpoint
    await new Promise(r => setTimeout(r, 300 + Math.random() * 400));
    if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
    return {
        data: Array.from({ length: 10 }, (_, i) => ({
            id: page * 10 + i,
            name: `User ${page * 10 + i}`,
            email: `user${page * 10 + i}@example.com`,
        })),
        total: 100,
    };
};

const useFetch = (url) => {
    // Task 1A
    // Return { data, loading, error }
    // Fetch whenever `url` changes
    return { data: null, loading: false, error: null };
};

const usePaginatedFetch = (page) => {
    // Task 1B — fix the race condition
    // Use AbortController: cancel the previous request when `page` changes
    //
    // Task 2A — add a cache: Map<page, data>
    // Skip the fetch if the page is already cached
    //
    // Task 2B — prefetch page+1 after a successful fetch
    //
    // Task 3 — expose a refresh() that clears the cache entry and re-fetches
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchPage(page)
            .then(res => { setData(res.data); setLoading(false); })
            .catch(err => { setError(err.message); setLoading(false); });
    }, [page]);

    const refresh = () => { /* Task 3 */ };

    return { data, loading, error, refresh };
};

const Pagination = ({ page, total, perPage, onChange }) => {
    const pageCount = Math.ceil(total / perPage);
    return (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 12 }}>
            <button disabled={page === 0} onClick={() => onChange(page - 1)}>Prev</button>
            <span>Page {page + 1} of {pageCount}</span>
            <button disabled={page >= pageCount - 1} onClick={() => onChange(page + 1)}>Next</button>
        </div>
    );
};

const Table = ({ rows }) => (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ textAlign: 'left', padding: '6px 8px' }}>ID</th>
                <th style={{ textAlign: 'left', padding: '6px 8px' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '6px 8px' }}>Email</th>
            </tr>
        </thead>
        <tbody>
            {rows.map(r => (
                <tr key={r.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '6px 8px' }}>{r.id}</td>
                    <td style={{ padding: '6px 8px' }}>{r.name}</td>
                    <td style={{ padding: '6px 8px' }}>{r.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

const App = () => {
    const [page, setPage] = useState(0);
    const { data, loading, error, refresh } = usePaginatedFetch(page);

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Users</h2>
                <button onClick={refresh}>Refresh</button>
            </div>
            {loading && <p>Loading page {page + 1}...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && <Table rows={data} />}
            <Pagination page={page} total={100} perPage={10} onChange={setPage} />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App /></React.StrictMode>
);