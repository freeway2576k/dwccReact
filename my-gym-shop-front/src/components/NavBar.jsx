import React from 'react'
import { Link } from 'react-router-dom'
import './../css/navbar.css'

export const NavBar = () => {
    return (
        
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">The Gym Shop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to={'/'} className='nav-link'>Inicio</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/sobre-nosotros'} className='nav-link'>Sobre Nosotros</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/tienda'} className='nav-link'>Tienda</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/contacto'} className='nav-link'>Contacto</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/faq'} className='nav-link'>FAQ</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/gestion-usuarios'} className='nav-link'>Gestion de Usuarios</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/gestion-articulos'} className='nav-link'>Gestion de Articulos</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        
    )
}
