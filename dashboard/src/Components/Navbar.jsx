import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav style={{ padding: "10px", background: "#eee" }}>
                <Link to="/" style={{ margin: "0 10px" }}>
                    Users
                </Link>
                <Link to="/products" style={{ margin: "0 10px" }}>
                    Products
                </Link>
                <Link to="/feeds" style={{ margin: "0 10px" }}>
                    Feeds
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
