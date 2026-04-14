import React from 'react'
import ReactDOM from 'react-dom/client'

const { useState, useRef, useMemo, useCallback, memo } = React;

const ITEM_HEIGHT = 40;
const OVERSCAN = 3;

const ALL_ITEMS = Array.from({ length: 10_000 }, (_, i) => ({
    id: i,
    label: `Row ${i} — ${Math.random().toString(36).slice(2, 8)}`,
}));

const getVisibleRange = (scrollTop, containerHeight, itemCount) => {
    // Task 1A
    // Return { start, end } indices of rows that fit in the viewport.
    // Each row is ITEM_HEIGHT px tall.
    return { start: 0, end: 20 };
};

const RowItem = memo(({ item, style, onClick }) => {
    // Task 2A — this component is wrapped in React.memo
    // Add a console.log here and observe when it re-renders.
    // When does memo actually prevent a re-render?
    return (
        <div style={{ ...style, display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid #eee' }}
            onClick={() => onClick(item.id)}>
            {item.label}
        </div>
    );
});

const VirtualList = ({ items, onRowClick }) => {
    const containerRef = useRef(null);
    const [scrollTop, setScrollTop] = useState(0);
    const containerHeight = 400;

    const { start, end } = useMemo(() => {
        // Task 1B — wrap getVisibleRange in useMemo
        // What should the dependency array be?
        return getVisibleRange(scrollTop, containerHeight, items.length);
    }, [scrollTop, items.length]);

    // Task 3 — expand start and end by OVERSCAN rows in each direction
    // clamp so they don't go out of bounds
    const overscanStart = start;
    const overscanEnd = end;

    const handleRowClick = useCallback((id) => {
        // Task 2B — wrap in useCallback
        // Why does this matter for React.memo on RowItem?
        onRowClick(id);
    }, [onRowClick]);

    const totalHeight = items.length * ITEM_HEIGHT;

    return (
        <div
            ref={containerRef}
            style={{ height: containerHeight, overflowY: 'auto', border: '1px solid #ddd', position: 'relative' }}
            onScroll={e => setScrollTop(e.currentTarget.scrollTop)}
        >
            <div style={{ height: totalHeight, position: 'relative' }}>
                {items.slice(overscanStart, overscanEnd).map((item, i) => (
                    <RowItem
                        key={item.id}
                        item={item}
                        onClick={handleRowClick}
                        style={{
                            position: 'absolute',
                            top: (overscanStart + i) * ITEM_HEIGHT,
                            width: '100%',
                            height: ITEM_HEIGHT,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const App = () => {
    const [selected, setSelected] = useState(null);
    const handleRowClick = useCallback((id) => setSelected(id), []);

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
            <h2>Virtualized list — 10,000 rows</h2>
            {selected !== null && <p>Selected: Row {selected}</p>}
            <VirtualList items={ALL_ITEMS} onRowClick={handleRowClick} />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App /></React.StrictMode>
);