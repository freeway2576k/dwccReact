import React from 'react'
import './../css/Login.css'

export const Login = () => {
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
                  placeholder="Ej. usuario@gym.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="••••••••"
                />
              </div>
              <button type="submit" className="btn btn-naranja w-100">Iniciar Sesión</button>
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
