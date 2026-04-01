import "./App.css";
/*
Tasks:

1. Implement + / - buttons to update quantity of each product
2. Add a "Remove" button to delete item from cart
3. Display total price
4. If total > 1000, apply 10% discount and show final price
*/

import React, { useState, useMemo } from "react";

const initialItems = [
    { id: 1, name: "Laptop", price: 800, quantity: 1 },
    { id: 2, name: "Mouse", price: 50, quantity: 1 },
    { id: 3, name: "Keyboard", price: 100, quantity: 1 },
];

export default function ShoppingCart() {
    const [items, setItems] = useState(initialItems);
    var total = useMemo(() => {
        return items.reduce((sum, item) => {
            return sum + item.quantity * item.price;
        }, 0);
    }, [items]);

    const final = total > 1000 ? total - total * 0.1 : total;

    function decQuant(idx) {
        var itemsCopy = [...items];
        var item = { ...itemsCopy[idx] };

        if (item.quantity == 0) return;
        item.quantity -= 1;
        itemsCopy[idx] = item;
        setItems(itemsCopy);
    }

    function incQuant(idx) {
        var itemsCopy = [...items];
        var item = { ...itemsCopy[idx] };
        item.quantity += 1;
        itemsCopy[idx] = item;
        setItems(itemsCopy);
    }

    function handleDeleteItem(idx) {
        var itemsCopy = [...items];
        itemsCopy = itemsCopy.filter((item) => idx + 1 !== item.id);

        setItems(itemsCopy);
    }

    return (
        <div>
            {items.map((item, idx) => (
                <div key={item.id}>
                    {item.name} - ${item.price}
                    <button onClick={() => decQuant(idx)}>-</button>
                    {item.quantity}
                    <button onClick={() => incQuant(idx)}>+</button>
                    <button onClick={() => handleDeleteItem(idx)}>
                        Remove
                    </button>
                </div>
            ))}

            <div>Total: {total}</div>
            <div>Final Price: {final}</div>
        </div>
    );
}
