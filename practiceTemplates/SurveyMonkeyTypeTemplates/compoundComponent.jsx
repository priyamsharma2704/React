import React from 'react'
import ReactDOM from 'react-dom/client'

const { useState, useContext, createContext, useRef, useEffect } = React;

const AccordionContext = createContext(null);

const useAccordion = () => {
    // Task 1B
    // Read from AccordionContext.
    // Throw a clear error if used outside <Accordion>
    return useContext(AccordionContext);
};

const Accordion = ({ children, multiple = false, value, onChange }) => {
    // Task 2B — controlled mode
    // If `value` prop is provided, use it + call onChange instead of internal state.
    // Otherwise manage state internally.
    const [openItems, setOpenItems] = useState([]);

    const toggle = (id) => {
        // Task 2A — if multiple=false, only one item can be open at a time
        // Task 2B — if controlled, call onChange(newOpenItems) instead of setOpenItems
        setOpenItems(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const isOpen = (id) => openItems.includes(id);

    return (
        <AccordionContext.Provider value={{ isOpen, toggle }}>
            <div>{children}</div>
        </AccordionContext.Provider>
    );
};

const AccordionItem = ({ children, id }) => {
    // Task 1A — just provide `id` to children via a nested context or cloneElement
    return <div style={{ borderBottom: '1px solid #ddd' }}>{children}</div>;
};

const AccordionTrigger = ({ children, id }) => {
    const { toggle, isOpen } = useAccordion();
    return (
        <button
            onClick={() => toggle(id)}
            style={{ width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}
        >
            {children}
            <span>{isOpen(id) ? '▲' : '▼'}</span>
        </button>
    );
};

const AccordionContent = ({ children, id }) => {
    const { isOpen } = useAccordion();
    const contentRef = useRef(null);

    // Task 3
    // Animate open/close using max-height transition.
    // When open: set maxHeight to scrollHeight px
    // When closed: set maxHeight to 0
    // Add overflow: hidden and a CSS transition on the element

    if (!isOpen(id)) return null; // replace this with the animated version

    return (
        <div ref={contentRef} style={{ padding: '0 0 12px', color: '#555', fontSize: 14 }}>
            {children}
        </div>
    );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

const App = () => {
    return (
        <div style={{ maxWidth: 480, margin: '2rem auto', fontFamily: 'sans-serif' }}>
            <h2>Accordion</h2>
            <Accordion multiple={false}>
                <Accordion.Item id="a">
                    <Accordion.Trigger id="a">What is a compound component?</Accordion.Trigger>
                    <Accordion.Content id="a">
                        A pattern where a parent component shares implicit state with its children via context, avoiding prop drilling.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item id="b">
                    <Accordion.Trigger id="b">When would you use useReducer over useState?</Accordion.Trigger>
                    <Accordion.Content id="b">
                        When state transitions are complex, when next state depends on previous state, or when multiple sub-values update together.
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item id="c">
                    <Accordion.Trigger id="c">What problem does React.memo solve?</Accordion.Trigger>
                    <Accordion.Content id="c">
                        It memoizes the rendered output of a component and skips re-rendering if props are shallowly equal — useful when a parent re-renders frequently but a child's output hasn't changed.
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App /></React.StrictMode>
);