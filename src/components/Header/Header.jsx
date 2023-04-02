import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Zayn's Meal DB</h2>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/orders">Orders</a></li>
                    <li><a href="/meals">Meals</a></li>
                    <li><a href="api">API</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;