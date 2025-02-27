import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      carrito: [],
      envio: 100,
      precioSubtotal: (productoID) => {
        const producto = get().carrito.find((p) => p._id === productoID);
        return producto ? producto.precio * producto.quantity : 0;
      },
      precioTotal: () => {
        return get().carrito.reduce(
          (total, producto) => total + producto.precio * producto.quantity,
          0
        );
      },
      precioTotalEnvio: () => {
        return get().precioTotal() + get().envio;
      },
      agregarProducto: (producto) =>{
        if (get().carrito.find(p => p._id === producto._id)) {
            get().incrementarCantidad(producto._id);
        }else{
            set((state) => ({
              carrito: [...state.carrito, { ...producto, quantity: 1 }],
            }))}
        },
      removerProducto: (productoID) =>
        set((state) => ({
          carrito: state.carrito.filter((p) => p._id !== productoID),
        })),
      incrementarCantidad: (productoID) =>
        set((state) => ({
          carrito: state.carrito.map((p) =>
            p._id === productoID ? { ...p, quantity: p.quantity + 1 } : p
          ),
        })),
      decrementarCantidad: (productoID) =>
        set((state) => ({
          carrito: state.carrito.map((p) =>
            p._id === productoID && p.quantity > 1
              ? { ...p, quantity: p.quantity - 1 }
              : p
          ),
        })),
      borrarCarrito: () => set({ carrito: [] }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        carrito: state.carrito,
      }),
    }
  )
);

export default useCartStore;
