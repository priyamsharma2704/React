/*
Tasks:

1. Implement + / - buttons to update quantity of each product
2. Add a "Remove" button to delete item from cart
3. Display total price
4. If total > 100, apply 10% discount and show final price
*/

import React, { useState, useMemo } from "react";

const initialItems = [
  { id: 1, name: "Laptop", price: 800, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 1 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price}
          <button>-</button>
          {item.quantity}
          <button>+</button>
          <button>Remove</button>
        </div>
      ))}

      <div>Total: {/* Task */}</div>
      <div>Final Price: {/* Task */}</div>
    </div>
  );
}