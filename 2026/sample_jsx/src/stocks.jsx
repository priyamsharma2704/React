/*
Implement logic to update stock quantities.

Compute total portfolio value using useMemo.

Add a “target portfolio value” input.
When the portfolio exceeds the target, highlight the total in red.

Optimize re-renders so only the updated stock row re-renders.
*/
import { useEffect, useState, useMemo } from "react";
const initialStocks = [
    { symbol: "AAPL", price: 180, qty: 2 },
    { symbol: "MSFT", price: 320, qty: 1 },
    { symbol: "TSLA", price: 250, qty: 3 },
];

function Stocks() {
    const [stocks, setStocks] = useState(initialStocks);
    const [target, setTarget] = useState("");

    var total = useMemo(() => {
        return stocks.reduce((sum, stock) => {
            return sum + stock.price * stock.qty;
        }, 0);
    }, [stocks]);

    // TODO: Mock API price updates every 5 seconds

    function handleChange(value) {
        setTarget(value);
    }
    function updatePrices() {
        var copyStocks = [];

        for (var stock of stocks) {
            var copyStock = { ...stock };
            copyStock.price = copyStock.price + Math.random() * 10 - 5;
            copyStocks.push(copyStock);
        }

        setStocks(copyStocks);
    }

    useEffect(() => {
        const interval = setInterval(updatePrices, 2000);
        return () => clearInterval(interval);
    }, []);

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

            <div
                id="total"
                style={{
                    color: target !== "" && total > target ? "red" : "inherit",
                }}
            >
                Total Value: {total}
            </div>

            <input
                type="number"
                placeholder="Target portfolio value"
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
            />
        </div>
    );
}

export default Stocks;
