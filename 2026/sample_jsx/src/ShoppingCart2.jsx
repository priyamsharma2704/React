/*
Implement add/remove quantity.

Compute:subtotal and tax

category‑based discounts (e.g., 10% off electronics)

Add a promo code input:

If code is "SAVE20", apply 20% discount.

Memoize all derived values.

Prevent unnecessary re-renders using React.memo.
*/
import React, { useState, useMemo } from "react";
const initialCart = [
    { name: "Laptop", price: 1000, qty: 1, category: "electronics" },
    { name: "Shoes", price: 10, qty: 2, category: "apparel" },
];

function ShoppingCart2() {
    const [cart, setCart] = useState(initialCart);
    const [promo, setPromo] = useState("");
    //const [total, setTotal] = useState(0);
    var tax = "15%";

    var subTotal = useMemo(() => {
        return cart.reduce((sum, item) => {
            return sum + item.qty * item.price;
        }, 0);
    }, [cart]);

    var taxAmount = useMemo(() => {
        return subTotal * 0.15;
    }, [subTotal]);

    var total = useMemo(() => {
        var discount = 0;
        if (promo == "SAVE20") discount = subTotal * 0.2;
        return subTotal + taxAmount - discount;
    }, [subTotal, promo, taxAmount]);

    function handleDecQuant(idx) {
        var cartCopy = [...cart];
        var item = { ...cartCopy[idx] };
        if (item.qty == 0) return;
        item.qty -= 1;
        cartCopy[idx] = item;
        setCart(cartCopy);
    }

    function handleIncQuant(idx) {
        var cartCopy = [...cart];
        var item = { ...cartCopy[idx] };
        item.qty += 1;
        cartCopy[idx] = item;
        setCart(cartCopy);
    }

    function handlePromoCode(value) {
        setPromo(value);
    }
    return (
        <div>
            {cart.map((item, idx) => (
                <div key={item.name}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button onClick={() => handleDecQuant(idx)}>-</button>
                    {item.qty}
                    <button onClick={() => handleIncQuant(idx)}>+</button>
                </div>
            ))}

            <div>Subtotal: {subTotal}</div>
            <div>Tax: {taxAmount}</div>
            {/* <div>Discounts: {}</div> */}
            <div>Total: {total}</div>

            <input
                onChange={(e) => {
                    handlePromoCode(e.target.value);
                }}
                placeholder="Promo code"
                value={promo}
            />
        </div>
    );
}

export default ShoppingCart2;
