// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
