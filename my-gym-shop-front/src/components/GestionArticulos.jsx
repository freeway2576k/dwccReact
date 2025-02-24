import { useState, useEffect } from 'react'
import './../css/GestionArticulos.css'
import  useAuthStore  from '../store/authStore';

export const GestionArticulos = () => {
  const token = useAuthStore.getState().token;
  //---------------------Donde se guarda el articulo-----------------------------//
  const [articulo, setArticulo] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: "",
    marca: "",
    peso: "",
    dimensiones: "",
    estado: "",
    descripcion: "",
  });
  const [articulos, setArticulos] = useState([]);
  //-----------------------------------------------------------------------------//

  //--------------------- para que actualice el objeto articulo -----------------//
  const manejarCambiosInput = (e) => {
    const { name, value } = e.target;
    setArticulo((prevArticulo) => ({
      ...prevArticulo,
      [name]: value,
    }));
    console.log(articulo);
  };
  //-----------------------------------------------------------------------------//
  //--------------------- para guardar articulo --------------------------------//
  const almacenarArticulo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/atlas/articulos/", {
        method: "POST",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articulo),
      });
      if (response.ok) {
        console.log("Articulo guardado correctamente");
        obtenerArticulos();
      } else {
        console.log("Error al guardar articulo");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //-----------------------------------------------------------------------------//
  //--------------------- para modificar articulo ------------------------------//
  const modificarArticulo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/atlas/articulos/" + articulo._id, {
        method: "PUT",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articulo),
      });
      if (response.ok) {
        console.log("Articulo modificado correctamente");
        obtenerArticulos();
      } else {
        console.log("Error al modificar articulo");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //-----------------------------------------------------------------------------//
  //--------------------- para eliminar articulo -------------------------------//
  const eliminarArticulo = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/atlas/articulos/" + id, {
        method: "DELETE",
        headers: {
          "Authorization": token,
        }
      });
      if (response.ok) {
        console.log("Articulo eliminado correctamente");
        obtenerArticulos();
      } else {
        console.log("Error al eliminar articulo");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //-----------------------------------------------------------------------------//

  //--------------------- para obtener articulos --------------------------------//
  const obtenerArticulos = async () => {
    try {
      const response = await fetch("http://localhost:5000/atlas/articulos/", {
        method: "GET",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json",
        }
      });
      if (response.ok) {
        const articulos = await response.json();
        setArticulos(articulos);
      } else {
        console.log("Error al obtener articulos");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //-----------------------------------------------------------------------------//

  useEffect(() => {
    obtenerArticulos();
  }, []);

  //-----------------------------------------------------------------------------//
  //--------------------- seleccionar articulo ---------------------------------//
    const seleccionarArticulo = (id) => {
        const articuloSeleccionado = articulos.find(articulo => articulo._id === id);
        setArticulo(articuloSeleccionado);
    };
  //-----------------------------------------------------------------------------//

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
                name="nombre"
                value={articulo.nombre}
                onChange={manejarCambiosInput}
                placeholder="Ej. Máquina de Pesas"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="category" className="form-label">Categoría</label>
              <select className="form-select" id="category" name="categoria" value={articulo.categoria} onChange={manejarCambiosInput}>
                <option value="">Selecciona una categoría</option>
                <option value="CARDIO">Cardio</option>
                <option value="MUSCULACION">Musculación</option>
                <option value="ACCESORIOS">Accesorios</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">Precio</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="precio"
                value={articulo.precio}
                onChange={manejarCambiosInput}
                placeholder="Ej. 1500"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="stock" className="form-label">Stock</label>
              <input
                type="number"
                className="form-control"
                id="stock"
                name="stock"
                value={articulo.stock}
                onChange={manejarCambiosInput}
                placeholder="Ej. 10"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="brand" className="form-label">Marca</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                name="marca"
                value={articulo.marca}
                onChange={manejarCambiosInput}
                placeholder="Ej. Life Fitness"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="weight" className="form-label">Peso (kg)</label>
              <input
                type="number"
                className="form-control"
                id="weight"
                name="peso"
                value={articulo.peso}
                onChange={manejarCambiosInput}
                placeholder="Ej. 120"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dimensions" className="form-label">Dimensiones (cm)</label>
              <input
                type="text"
                className="form-control"
                id="dimensions"
                name="dimensiones"
                value={articulo.dimensiones}
                onChange={manejarCambiosInput}
                placeholder="Ej. 150x80x120"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="condition" className="form-label">Estado</label>
              <select className="form-select" id="condition" name="estado" value={articulo.estado} onChange={manejarCambiosInput}>
                <option value="">Selecciona un estado</option>
                <option value="NUEVO">Nuevo</option>
                <option value="USADO">Usado</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">Descripción</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                name="descripcion"
                value={articulo.descripcion}
                onChange={manejarCambiosInput}
                placeholder="Ej. Máquina de musculación multifuncional con capacidad de 200kg"
              ></textarea>
            </div>
          </div>
          <div className="d-flex gap-3 mt-4">
            <button type="submit" className="btn btn-naranja" onClick={almacenarArticulo}>Guardar</button>
            <button type="button" className="btn btn-outline-dark" onClick={modificarArticulo}>Modificar</button>
          </div>
        </form>
      </div>

      <div className="card p-4">
        <h2 className="section-title mb-4">Lista de Artículos</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">id</th>
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
              {articulos.map((articulo, index) => {
                return (
                  <tr key={index}>
                    <td>{articulo._id}</td>
                    <td>{articulo.nombre}</td>
                    <td>{articulo.categoria}</td>
                    <td>{articulo.precio}</td>
                    <td>{articulo.stock}</td>
                    <td>{articulo.marca}</td>
                    <td>{articulo.peso}</td>
                    <td>{articulo.dimensiones}</td>
                    <td>{articulo.estado}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-naranja btn-sm me-2" onClick={() => seleccionarArticulo(articulo._id)}>
                          Editar
                        </button>
                        <button className="btn btn-outline-danger btn-sm" onClick={() => eliminarArticulo(articulo._id)}>
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
  )
}
