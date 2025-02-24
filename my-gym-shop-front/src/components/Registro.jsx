import { useState } from 'react'
import { Link } from 'react-router-dom'
import './../css/Registro.css'
import { useNavigate } from 'react-router-dom'
export const Registro = () => {
  const navigate = useNavigate();
   //------------------Donde se guarda el usuario a crear ------------------//
   const [usuario, setUsuario] = useState({
     nombre: "",
     email: "",
     telefono: "",
     rol: "USER",
     password: "",
   });
   const [passwordConfirmation, setPasswordConfirmation] = useState("");
   //-----------------------------------------------------------------//
 
   //------------------ para que actualice el objeto usuario ----------//
   const manejarCambiosInput = (e) => {
     const { name, value } = e.target;
     setUsuario((prevUsuario) => ({
       ...prevUsuario,
       [name]: value,
     }));
     console.log(usuario);
   };
   
   const manejarConfirmacionPassword = (e) => {
     const { name, value } = e.target;
     setPasswordConfirmation(value);
   };

   //-----------------------------------------------------------------//

   //------------------ para registrar usuario -------------------------//

   const registrarUsuario = async (e) => {
    e.preventDefault();
    if(passwordConfirmation !== usuario.password) return alert("Las contraseñas no coinciden");

    try{
      const response = await fetch("http://localhost:5000/atlas/auth/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      if (response.ok) {
        console.log("Usuario registrado correctamente");
        navigate("/login");

      }else{
        console.log("Error al registrar usuario");
      }

    } catch (error) {
      console.log(error);
    }
  };
   //-----------------------------------------------------------------//


  return (
    <main className="d-flex flex-column min-vh-100 justify-content-center">
      <section className="hero">
        <div className="container">
          <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
            <h1 className="text-center mb-4">Registro</h1>
            <p className="text-center mb-4">Crea tu cuenta en GymForce</p>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Empresa</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name='nombre'
                  placeholder="Ej. Juan Pérez S.L"
                  onChange={manejarCambiosInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name='email'
                  placeholder="Ej. usuario@gym.com"
                  onChange={manejarCambiosInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Telefono</label>
                <input
                  type="tel"
                  className="form-control"
                  id="tel"
                  name='telefono'
                  placeholder="Ej. 678678678"
                  onChange={manejarCambiosInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name='password'
                  placeholder="••••••••"
                  onChange={manejarCambiosInput}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name='confirmPassword'
                  placeholder="••••••••"
                  onChange={manejarConfirmacionPassword}
                />
              </div>
              <button type="submit" className="btn btn-naranja w-100" onClick={registrarUsuario}>Registrarse</button>
            </form>
            <p className="text-center mt-3">
              ¿Ya tienes cuenta? <Link to="/login" className="text-muted">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
