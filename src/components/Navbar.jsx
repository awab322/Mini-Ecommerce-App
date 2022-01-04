import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const state = useSelector(state => state.CartReducer)


    return (
        <>
        <nav className="navbar shadow ">
        <div className="container-fluid justify-content-center">
            <NavLink to="/products" className="btn btn-outline-success me-2" type="button">Products</NavLink>
            <NavLink to="/cart" className="btn btn-outline-success me-2" type="button">Cart ({state.length})</NavLink>
        </div>
        </nav>
            
        </>
    );
}

export default Navbar;
