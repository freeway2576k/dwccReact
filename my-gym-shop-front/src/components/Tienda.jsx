import { useState, useEffect } from 'react'
import './../css/Tienda.css'
import useAuthStore from '../store/authStore';
import  useCartStore from '../store/cartStore';

export const Tienda = () => {
  const token = useAuthStore.getState().token;

  const [articulos, setArticulos] = useState([]);

  //--------------------- pa lo del carrito --------------------------------//
  const { carrito, agregarProducto, removerProducto, incrementarCantidad, decrementarCantidad, borrarCarrito } = useCartStore();
  const manejarAnhadirAlCarrito = (articulo) => {
    agregarProducto(articulo);
    //meter alerta de anhadido al carrito//
  }
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

  useEffect(() => {
    obtenerArticulos();
  }, []);
  //-----------------------------------------------------------------------------//
  return (
    <main className="d-flex flex-column py-5">
      <section className="container">
        <div className="heroTienda mb-5">
          <h1>Tienda</h1>
          <p>Explora nuestras máquinas y accesorios para gimnasios.</p>
        </div>

        <div className="row g-4">

          {articulos.map((articulo, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card p-3 h-100">
                  <img
                    src={'http://localhost:5000/uploads/imgProductos/' + articulo.imagen}
                    alt={articulo.nombre}
                    className="card-img-top"
                  />
                  <h3 className="card-title">{articulo.nombre}</h3>
                  <p className="card-price"><strong>Precio:</strong> ${articulo.precio}</p>
                  <button
                    className="btn btn-outline-dark mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target={`#articleModal${index}`}
                  >
                    Ver Más Detalles
                  </button>
                  <button className='btn btn-naranja mt-2' onClick={() =>manejarAnhadirAlCarrito(articulo)}> 
                    <i className="fa-solid fa-cart-shopping">Añadir al Carrito</i>
                  </button>
                </div>

                <div className="modal fade" id={`articleModal${index}`} tabIndex="-1" aria-labelledby={`articleModalLabel${index}`} aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id={`articleModalLabel${index}`}>{articulo.nombre}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <img
                              src={'http://localhost:5000/uploads/imgProductos/' + articulo.imagen}
                              alt={articulo.nombre}
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-md-6">
                            <p><strong>Categoría:</strong> {articulo.categoria}</p>
                            <p><strong>Precio:</strong> ${articulo.precio}</p>
                            <p><strong>Stock:</strong> {articulo.stock}</p>
                            <p><strong>Marca:</strong> {articulo.marca}</p>
                            <p><strong>Peso:</strong> {articulo.peso}kg</p>
                            <p><strong>Dimensiones:</strong> {articulo.dimensiones}</p>
                            <p><strong>Estado:</strong> {articulo.estado}</p>
                            <p><strong>Descripción:</strong> {articulo.descripcion}</p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-naranja" onClick={() => agregarProducto(articulo)}>Añadir al Carrito</button>
                        <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Cerrar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  );
};
