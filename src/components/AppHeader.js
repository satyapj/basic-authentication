import React from 'react';
import { Link } from 'react-router-dom';

function AppHeader() {
    return <header>
        <nav className="navbar navbar-expand navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">App Navbar</span>
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
            </ul>
             
        </nav>
        
    </header>
}

export default AppHeader;