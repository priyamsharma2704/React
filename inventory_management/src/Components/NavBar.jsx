import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <nav>
                <div className="nav-bar">
                    <div>
                        <Link className="nav-item" to="/inward">
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link className="nav-item" to="/inward">
                            Inward
                        </Link>
                    </div>
                    <div>
                        <Link className="nav-item" to="/outward">
                            Outward
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
