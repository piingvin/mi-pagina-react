import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Mi Sitio Web</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;