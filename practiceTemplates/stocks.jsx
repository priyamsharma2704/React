/*
Implement logic to update stock quantities.

Compute total portfolio value using useMemo.

Add a “target portfolio value” input.
When the portfolio exceeds the target, highlight the total in red.

Optimize re-renders so only the updated stock row re-renders.
*/
const initialStocks = [
    { symbol: "AAPL", price: 180, qty: 2 },
    { symbol: "MSFT", price: 320, qty: 1 },
    { symbol: "TSLA", price: 250, qty: 3 },
];

function Portfolio() {
    const [stocks, setStocks] = useState(initialStocks);
    const [target, setTarget] = (useState < number) | (null > null);

    // TODO: Mock API price updates every 5 seconds

    return (
        <div>
            {stocks.map((s) => (
                <div key={s.symbol}>
                    <span>{s.symbol}</span>
                    <span>${s.price}</span>
                    <button>-</button>
                    {s.qty}
                    <button>+</button>
                </div>
            ))}

            <div>Total Value: {/* TODO */}</div>

            <input
                type="number"
                placeholder="Target portfolio value"
                // TODO
            />
        </div>
    );
}
