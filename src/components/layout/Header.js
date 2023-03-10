import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex items-center justify-center py-5 mb-20 text-white header gap-x-5">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-primary" : "backdrop:"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/movie"
                className={({ isActive }) =>
                    isActive ? "text-primary" : "backdrop:"
                }
            >
                Movies
            </NavLink>
        </header>
    );
};

export default Header;
