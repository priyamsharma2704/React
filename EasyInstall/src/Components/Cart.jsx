import { Link, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
function Cart() {
    const location = useLocation();
    const apps = location.state.apps;
    console.log(apps.length);
    if (apps.length == 0) {
        return (
        <>
            <div>Cart Empty</div>
            <Link to="/">
            <button>Home</button>
            </Link>
        </>
        );
    }

    return (
        <>
        <ul>
            {apps.map((app, index) => (
            <li key={index}>
                {app}
                <IconButton aria-label="delete" size="small" color="error">
                <DeleteIcon fontSize="inherit" />
                </IconButton>
            </li>
            ))}
        </ul>
        <Link to="/">
            <button>Home</button>
        </Link>
        <button>Download Script</button>
        </>
    );
}

export default Cart;
