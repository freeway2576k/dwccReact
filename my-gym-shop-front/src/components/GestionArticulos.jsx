import React from 'react'
import './../css/GestionArticulos.css'
import { useAuthStore } from '../store/authStore';

export const GestionArticulos = () => {
  const token = useAuthStore.getState().token;
  return (
    <main className="d-flex flex-column py-5">
    <section className="container">
      <div className="hero3 mb-5">
        <h1>Gestión de Artículos</h1>
        <p>Administra el inventario de máquinas de tu gimnasio.</p>
      </div>

      <div className="card p-4 mb-5">
        <h2 className="section-title mb-4">Agregar/Modificar Artículo</h2>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ej. Máquina de Pesas"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="category" className="form-label">Categoría</label>
              <select className="form-select" id="category">
                <option value="">Selecciona una categoría</option>
                <option value="cardio">Cardio</option>
                <option value="musculacion">Musculación</option>
                <option value="accesorios">Accesorios</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">Precio</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Ej. 1500"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="stock" className="form-label">Stock</label>
              <input
                type="number"
                className="form-control"
                id="stock"
                placeholder="Ej. 10"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="brand" className="form-label">Marca</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                placeholder="Ej. Life Fitness"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="weight" className="form-label">Peso (kg)</label>
              <input
                type="number"
                className="form-control"
                id="weight"
                placeholder="Ej. 120"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dimensions" className="form-label">Dimensiones (cm)</label>
              <input
                type="text"
                className="form-control"
                id="dimensions"
                placeholder="Ej. 150x80x120"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="condition" className="form-label">Estado</label>
              <select className="form-select" id="condition">
                <option value="">Selecciona un estado</option>
                <option value="new">Nuevo</option>
                <option value="used">Usado</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">Descripción</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Ej. Máquina de musculación multifuncional con capacidad de 200kg"
              ></textarea>
            </div>
          </div>
          <div className="d-flex gap-3 mt-4">
            <button type="submit" className="btn btn-naranja">Guardar</button>
            <button type="button" className="btn btn-outline-dark">Modificar</button>
          </div>
        </form>
      </div>

      <div className="card p-4">
        <h2 className="section-title mb-4">Lista de Artículos</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Categoría</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col">Marca</th>
                <th scope="col">Peso</th>
                <th scope="col">Dimensiones</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Máquina de Pesas</td>
                <td>Musculación</td>
                <td>$1500</td>
                <td>10</td>
                <td>Life Fitness</td>
                <td>120kg</td>
                <td>150x80x120</td>
                <td>Nuevo</td>
                <td>
                  <button className="btn btn-naranja btn-sm me-2">Editar</button>
                  <button className="btn btn-outline-danger btn-sm">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Cinta de Correr</td>
                <td>Cardio</td>
                <td>$2000</td>
                <td>5</td>
                <td>Technogym</td>
                <td>80kg</td>
                <td>180x70x140</td>
                <td>Usado</td>
                <td>
                  <button className="btn btn-naranja btn-sm me-2">Editar</button>
                  <button className="btn btn-outline-danger btn-sm">Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Pesas de 10kg</td>
                <td>Accesorios</td>
                <td>$50</td>
                <td>20</td>
                <td>Rogue</td>
                <td>10kg</td>
                <td>30x20x10</td>
                <td>Nuevo</td>
                <td>
                  <button className="btn btn-naranja btn-sm me-2">Editar</button>
                  <button className="btn btn-outline-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
  )
}
