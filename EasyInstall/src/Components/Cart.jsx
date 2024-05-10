import { Link, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
function Cart() {
    const location = useLocation();
    const apps = location.state.apps;
    console.log(location.state);

    const handleDeleteItem = () =>
        {
            console.log("delete");
            const currItem = e.target.parentElement.innerText;
        if (!e.target.checked) 
        {
            setItemsInCart((prevItem) => prevItem - 1);

            /*
            When using React, you should never mutate the state directly. If an object (or Array, which is an object too) is changed, you should create a new copy.
            Others have suggested using Array.prototype.splice(), but that method mutates the Array, so it's better not to use splice() with React.
            Easiest to use Array.prototype.filter() to create a new array:
                    */
            setApps((apps) =>
                apps.filter(function (list) {
                return list != currItem;
                })
            );
            return;
        }

        setItemsInCart((prevItem) => prevItem + 1);
        setApps((apps) => [...apps, e.target.parentElement.innerText]);
        }


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
                <IconButton aria-label="delete" size="small" color="error" onClick={handleDeleteItem}>
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
