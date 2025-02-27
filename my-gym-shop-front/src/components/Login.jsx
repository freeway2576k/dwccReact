import {useState} from 'react'
import './../css/Login.css'
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Login = () => {
  const { iniciarSesion } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hacerLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      const response = await fetch('http://localhost:5000/atlas/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
      if (response.ok){
        const {usuario, token, rol} = await response.json();
        iniciarSesion(usuario, token, rol)
        navigate('/')
        console.log('Usuario iniciado sesión');
      }else {
        console.log('credenciales o email incorrectos');
      }
      
    } catch (error) {
      console.log("error al iniciar sesion", error);
    }
  }

  return (
    <main className="d-flex flex-column min-vh-100 justify-content-center">
      <section className="hero">
        <div className="container">
          <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
            <h1 className="text-center mb-4">Iniciar Sesión</h1>
            <p className="text-center mb-4">Accede a tu cuenta de The Gym Shop</p>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ej. usuario@gym.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>
              <button type="submit" className="btn btn-naranja w-100" onClick={hacerLogin}>Iniciar Sesión</button>
              <Link to="/register" className="btn btn-outline-dark mt mt-2 w-100">Registrarse</Link>
            </form>
            <p className="text-center mt-3">
              <a href="#forgot-password" className="text-muted">¿Olvidaste tu contraseña?</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
