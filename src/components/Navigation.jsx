import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
    return ( 
        <div className="navbar">
            <div className="all-category"> 
                <a>All Category</a>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div> 
                <ul> 
                    <li>Test</li>
                    <li>Test2</li>
                    <li>Test3</li>
                </ul>
            </div>
        </div>   
    )
}

export default Navigation;