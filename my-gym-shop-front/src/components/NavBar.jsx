import "./../css/navbar.css";
import useAuthStore from '../store/authStore';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const { cerrarSesion } = useAuthStore();
    const hacerLogout =  (e) => {
        e.preventDefault();
        cerrarSesion();
        Navigate('/');
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    The Gym Shop
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/sobre-nosotros"} className="nav-link">
                                Sobre Nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/tienda"} className="nav-link">
                                Tienda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contacto"} className="nav-link">
                                Contacto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/faq"} className="nav-link">
                                FAQ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/gestion-usuarios"} className="nav-link">
                                Gestion de Usuarios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/gestion-articulos"} className="nav-link">
                                Gestion de Articulos
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="userDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-person-fill me-2"></i>
                                Cuenta
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="userDropdown"
                            >
                                <li>
                                    <Link to="/login" className="dropdown-item">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register" className="dropdown-item">
                                        Registro
                                    </Link>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={hacerLogout}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
