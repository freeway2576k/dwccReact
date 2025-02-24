import { useEffect, useState } from "react";
import "./../css/GestionUsuarios.css";
export const GestionUsuarios = () => {
  //------------------Donde se guardan los clientes ------------------//
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    rol: "",
  });
  const [usuarios, setUsuarios] = useState([]);
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
  //-----------------------------------------------------------------//

  //------------------ para guardar usuario -------------------------//
  const almacenarUsuario = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/atlas/usuarios/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      if (response.ok) {
        console.log("Usuario guardado correctamente");
        obtenerUsuarios();
      } else {
        console.log("Error al guardar usuario");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //-----------------------------------------------------------------//

  //-----------------------Obtener usuarios -------------------------//

  const obtenerUsuarios = async () => {
    try {
      const response = await fetch("http://localhost:5000/atlas/usuarios/", {
        method: "GET",
      });
      if (response.ok) {
        const usuarios = await response.json();
        setUsuarios(usuarios);
      } else {
        console.log("Error al obtener usuarios");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  //-----------------------------------------------------------------//
  //----------------------- seleccionar usuario ---------------------//
    const seleccionarUsuario = (id) => {
        const usuarioSeleccionado = usuarios.find(usuario => usuario._id === id);
        setUsuario(usuarioSeleccionado);
    };
  //-----------------------------------------------------------------//

  //----------------------- modificar usuario -----------------------//
    const modificarUsuario = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:5000/atlas/usuarios/" + usuario._id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        });
        if (response.ok) {
          console.log("Usuario modificado correctamente");
          obtenerUsuarios();
        } else {
          console.log("Error al modificar usuario");
        }
      } catch (error) {
        console.log(error);
      }
    };
  //-----------------------------------------------------------------//

  //----------------------- eliminar usuario ------------------------//
  const eliminarUsuario = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/atlas/usuarios/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Usuario eliminado correctamente");
        obtenerUsuarios();
      } else {
        console.log("Error al eliminar usuario");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //-----------------------------------------------------------------//

  return (
    <main className="d-flex flex-column py-5">
      <section className="container">
        <div className="hero2 mb-5">
          <h1>Gestión de Usuarios</h1>
        </div>

        <div className="card p-4 mb-5">
          <h2 className="section-title mb-4">Agregar/Modificar Usuario</h2>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Empresa
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="nombre"
                  value={usuario.nombre}
                  onChange={manejarCambiosInput}
                  placeholder="Ej. Gym Shop"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={usuario.email}
                  onChange={manejarCambiosInput}
                  placeholder="Ej. gym@shop.com"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="telefono"
                  value={usuario.telefono}
                  onChange={manejarCambiosInput}
                  placeholder="Ej. 900 456 789"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="role" className="form-label">
                  Rol
                </label>
                <select
                  className="form-select"
                  id="role"
                  name="rol"
                  value={usuario.rol}
                  onChange={manejarCambiosInput}
                >
                  <option value="">Selecciona un rol</option>
                  <option value="admin">Administrador</option>
                  <option value="client">Cliente</option>
                </select>
              </div>
            </div>
            <div className="d-flex gap-3 mt-4">
              <button
                type="submit"
                className="btn btn-naranja"
                onClick={almacenarUsuario}
              >
                Guardar
              </button>
              <button type="button" className="btn btn-outline-dark" onClick={modificarUsuario}>
                Modificar
              </button>
            </div>
          </form>
        </div>

        <div className="card p-4">
          <h2 className="section-title mb-4">Lista de Usuarios</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Empresa</th>
                  <th scope="col">Email</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Rol</th>
                  <th scope="col">fecha de Alta</th>
                  <th scope="col">Ultima modificación</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario, index) => {
                  return (
                    <tr key={index}>
                      <td>{usuario._id}</td>
                      <td>{usuario.nombre}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.telefono}</td>
                      <td>{usuario.rol}</td>
                      <td>{new Date(usuario.createdAt).toLocaleString()}</td>
                      <td>{new Date(usuario.updatedAt).toLocaleString()}</td>
                      <td>
                        <div className="d-flex gap-2">
                          <button className="btn btn-naranja btn-sm me-2" onClick={() => seleccionarUsuario(usuario._id)}>
                            Editar
                          </button>
                          <button className="btn btn-outline-danger btn-sm" onClick={() => eliminarUsuario(usuario._id)}>
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};
