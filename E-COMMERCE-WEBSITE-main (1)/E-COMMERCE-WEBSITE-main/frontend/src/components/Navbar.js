// src/components/Navbar.js
import React from 'react';

const Navbar = ({ cart }) => {
    return (
        <nav>
            <h1>E-Commerce App</h1>
            <div className="cart-count">
                Cart Items: {cart.length}
            </div>
        </nav>
    );
};

export default Navbar;
