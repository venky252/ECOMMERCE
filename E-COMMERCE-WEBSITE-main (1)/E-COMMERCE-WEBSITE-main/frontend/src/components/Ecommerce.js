// src/App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from '../Cart';
import Navbar from './Navbar';
import "./App.css"
import Home from './Home/Home';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="App">
            <Home/>
            <Header/>
            <Navbar cart={cart} />
            <ProductList addToCart={addToCart} />
            <Cart cart={cart} />
        </div>
    );
};

export default App;
