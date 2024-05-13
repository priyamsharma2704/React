import { Link, createRoutesFromChildren, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {saveAs} from 'file-saver';
import { useAppStore, useItemStore } from "../Store/store";

function Cart() 
{
    const {appsList, removeAppFromCart} = useAppStore((state) => ({
        appsList: state.appsList,
        removeAppFromCart: state.removeAppFromCart
    }));

    const {removeItem} = useItemStore((state) => ({
        removeItem: state.removeItem
    }));

    const handleDeleteItem = (app) =>
        {
            removeAppFromCart(app);
            removeItem();
        }

    /* To download a file 
        https://www.altcademy.com/blog/how-to-write-file-in-reactjs/
    */
    const handleDownloadScript = () =>
        {
            const file = new Blob(["Hello"], {type:'text/plain;charset=utf-8'});
            saveAs(file, "hello.txt");
        }

    if (appsList.length == 0) 
    {
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
            {appsList.map((app, index) => (
            <li key={index}>
                {app}
                <IconButton aria-label="delete" size="small" color="error" onClick={() => handleDeleteItem(app)}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </li>
            ))}
        </ul>
        <Link to="/">
            <button>Home</button>
        </Link>
        <button onClick={handleDownloadScript}>Download Script</button>
        </>
    );
}

export default Cart;
