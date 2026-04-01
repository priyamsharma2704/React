/*
Implement add/remove quantity.

Compute:

subtotal

tax

category‑based discounts (e.g., 10% off electronics)

Add a promo code input:

If code is "SAVE20", apply 20% discount.

Memoize all derived values.

Prevent unnecessary re-renders using React.memo.
*/

const initialCart = [
    { name: "Laptop", price: 1200, qty: 1, category: "electronics" },
    { name: "Shoes", price: 90, qty: 2, category: "apparel" },
];

function Cart() {
    const [cart, setCart] = useState(initialCart);
    const [promo, setPromo] = useState("");

    return (
        <div>
            {cart.map((item) => (
                <div key={item.name}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button>-</button>
                    {item.qty}
                    <button>+</button>
                </div>
            ))}

            <div>Subtotal: {/* TODO */}</div>
            <div>Tax: {/* TODO */}</div>
            <div>Discounts: {/* TODO */}</div>
            <div>Total: {/* TODO */}</div>

            <input placeholder="Promo code" /* TODO */ />
        </div>
    );
}
