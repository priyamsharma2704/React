/*
Tasks:

1. Increase/decrease quantity
2. Prevent quantity > stock
3. Show message if exceeded
*/

import React, { useState } from "react";

const products = [
    { id: 1, name: "Phone", stock: 3, quantity: 1 },
    { id: 2, name: "Tablet", stock: 2, quantity: 1 },
];

export default function App() {
    const [items, setItems] = useState(products);

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    {item.name} (Stock: {item.stock})<button>-</button>
                    {item.quantity}
                    <button>+</button>
                </div>
            ))}

            {/* Show error message */}
        </div>
    );
}
