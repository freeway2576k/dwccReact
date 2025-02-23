import React from 'react'
import { Link } from 'react-router-dom'
import './../css/navbar.css'

export const NavBar = () => {
    return (
        
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">MiMarca</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to={'/'}><a class="nav-link">Inicio</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/sobre-nosotros'}><a class="nav-link">Sobre Nosotros</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/tienda'}><a class="nav-link">Tienda</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/contacto'}><a class="nav-link">Contacto</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/faq'}><a class="nav-link">FAQ</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        
    )
}
