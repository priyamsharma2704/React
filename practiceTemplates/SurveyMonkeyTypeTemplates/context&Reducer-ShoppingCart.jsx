import React from 'react'
import ReactDOM from 'react-dom/client'

const { useReducer, createContext, useContext, useMemo, useEffect } = React;

const PRODUCTS = [
    { id: 1, name: 'Mechanical keyboard', price: 129 },
    { id: 2, name: 'USB-C hub', price: 49 },
    { id: 3, name: 'Monitor stand', price: 35 },
];

const cartReducer = (state, action) => {
    // Task 1A
    // Handle these action types:
    //   ADD        — add item or increment qty if already present
    //   REMOVE     — remove item entirely
    //   UPDATE_QTY — set item qty to action.qty (remove if qty <= 0)
    switch (action.type) {
        default:
            return state;
    }
};

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [items, dispatch] = useReducer(cartReducer, []);

    // Task 3 — on mount, rehydrate from localStorage
    // on items change, persist to localStorage
    useEffect(() => { }, [items]);

    // Task 2B — memoize the context value so unrelated renders
    // don't cause every consumer to re-render
    const value = { items, dispatch };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
    // Task 1B
    // Return items and dispatch from CartContext
    // Throw a helpful error if used outside CartProvider
    return useContext(CartContext);
};

const CartSummary = () => {
    const { items } = useCart();

    // Task 2A — compute total and count as derived values (no useState)
    const total = 0;
    const count = 0;

    return (
        <div style={{ fontWeight: 500 }}>
            {count} items — ${total.toFixed(2)}
        </div>
    );
};

const ProductCard = ({ product }) => {
    const { dispatch } = useCart();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
            <span>{product.name} — ${product.price}</span>
            <button onClick={() => dispatch({ type: 'ADD', item: product })}>Add</button>
        </div>
    );
};

const CartItem = ({ item }) => {
    const { dispatch } = useCart();
    return (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '4px 0' }}>
            <span style={{ flex: 1 }}>{item.name}</span>
            <input
                type="number"
                value={item.qty}
                min={0}
                style={{ width: 48 }}
                onChange={e => dispatch({ type: 'UPDATE_QTY', id: item.id, qty: Number(e.target.value) })}
            />
            <button onClick={() => dispatch({ type: 'REMOVE', id: item.id })}>Remove</button>
        </div>
    );
};

const App = () => {
    const { items } = useCart();
    return (
        <div style={{ maxWidth: 480, margin: '2rem auto', fontFamily: 'sans-serif' }}>
            <h2>Shop</h2>
            {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
            <h3 style={{ marginTop: 24 }}>Cart</h3>
            {items.length === 0
                ? <p style={{ color: '#888' }}>Empty</p>
                : items.map(i => <CartItem key={i.id} item={i} />)
            }
            <CartSummary />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);