import "./../css/navbar.css";
import useAuthStore from '../store/authStore';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
export const NavBar = () => {
    const { isAuthenticated, rol } = useAuthStore();
    const { cerrarSesion } = useAuthStore();
    const hacerLogout =  (e) => {
        e.preventDefault();
        cerrarSesion();
        Navigate('/');
    }
//-------------------pa lo del carrito----------------------------//
    const carrito = useCartStore(state => state.carrito);
//----------------------------------------------------------------//

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
                        { isAuthenticated &&
                        <li className="nav-item">
                            <Link to={"/tienda"} className="nav-link">
                                Tienda
                            </Link>
                        </li>
                        }
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
                        {rol === 'ADMIN' &&
                        
                        <li className="nav-item">
                            <Link to={"/panel-gestion"} className="nav-link">
                                Panel de Gestion
                            </Link>
                        </li> 
                        
                        }
                        { isAuthenticated &&
                        <li>
                            <Link to={"/carrito"} className="nav-link">
                                <i className="bi bi-cart-fill fs-5">({carrito.length})</i>
                            </Link>
                        </li>
}
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
                                {
                                    !isAuthenticated &&
                                    <>
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
                                    
                                    </>
                                }
                                {
                                    isAuthenticated &&
                                <li>
                                    <button className="dropdown-item" onClick={hacerLogout}>
                                        Logout
                                    </button>
                                </li>
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
