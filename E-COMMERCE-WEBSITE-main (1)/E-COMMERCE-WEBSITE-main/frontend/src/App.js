// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './Cart';
import Navbar from './components/Navbar';
import './App.css';
import Login from './components/Login/Login';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="App">
            
            <Navbar cart={cart} />
            <ProductList addToCart={addToCart} />
            <Cart cart={cart} />
        </div>
    );
};

export default App;
