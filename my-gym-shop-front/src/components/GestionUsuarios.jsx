import React from "react";
import './../css/GestionUsuarios.css'
export const GestionUsuarios = () => {
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
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Ej. juan@gym.com" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Ej. +123 456 7890" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="role" className="form-label">Rol</label>
                    <select className="form-select" id="role">
                      <option value="">Selecciona un rol</option>
                      <option value="admin">Administrador</option>
                      <option value="client">Cliente</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex gap-3 mt-4">
                  <button type="submit" className="btn btn-naranja">Guardar</button>
                  <button type="button" className="btn btn-outline-dark">Modificar</button>
                </div>
              </form>
            </div>
    
                <div className="card p-4">
              <h2 className="section-title mb-4">Lista de Usuarios</h2>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Email</th>
                      <th scope="col">Teléfono</th>
                      <th scope="col">Rol</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Juan Pérez</td>
                      <td>juan@gym.com</td>
                      <td>+123 456 7890</td>
                      <td>Administrador</td>
                      <td>
                        <div className="d-flex gap-2">
                        <button className="btn btn-naranja btn-sm me-2">Editar</button>
                        <button className="btn btn-outline-danger btn-sm">Eliminar</button>
                        </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      );
};
