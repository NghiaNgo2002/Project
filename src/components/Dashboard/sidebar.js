import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { ThemeContext } from './context/ThemeContext'; // Make sure the path is correct


function Dropdown({ label, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)}>
                {label}
                <span className="dropdown-icon">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && <ul>{children}</ul>}
        </li>
    );
}

function Sidebar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        
        <div className={`sidebar ${theme === 'dark' ? 'dark-mode' : ''}`}>
            <ul>
                <li><Link to="/home-admin">Home</Link></li>
                <li><Link to="/profile-manage">Users Management</Link></li>
                <li><Link to="/crud">Products Management</Link></li>
                <Dropdown label="Orders Management">
                    <Link to="/place-order-emp">Add Order</Link>
                    <Link to="/get-order">Retrieve Order</Link>
                    <Link to="/update-order">Update Order</Link>
                    <Link to="/delete-order">Delete Order</Link>
                </Dropdown>
                <li><Link to="/payment-refund">Payment Management</Link></li>
                <li><Link to="/">Sign Out</Link></li>
            </ul>
            <li>
                <button onClick={toggleTheme}>Dark Mode</button>
            </li>
        </div>
    );
}

export default Sidebar;
