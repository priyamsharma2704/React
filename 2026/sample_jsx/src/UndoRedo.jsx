/*
Implement increment/decrement stock.

Add undo/redo functionality using a custom hook.

Add a “low stock” warning when stock < 3.

Add a button to reset inventory to initial state.
*/
import { useState } from "react";
const initialInventory = [
    { name: "Monitors", stock: 5 },
    { name: "Keyboards", stock: 2 },
    { name: "Mice", stock: 10 },
];

function UndoRedo() {
    const [inventory, setInventory] = useState(initialInventory);

    // TODO: useUndoRedo hook

    return (
        <div>
            {inventory.map((i) => (
                <div key={i.name}>
                    <span>{i.name}</span>
                    <button>-</button>
                    {i.stock}
                    <button>+</button>
                    {/* TODO: low stock warning */}
                </div>
            ))}

            <button>Undo</button>
            <button>Redo</button>
            <button>Reset</button>
        </div>
    );
}

export default UndoRedo;
