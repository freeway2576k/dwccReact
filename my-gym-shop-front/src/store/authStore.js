import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
    usuario: null,
    token: null,
    rol: null,
    isAuthenticated: false,

    iniciarSesion: (usuario, token, rol) => 
        set({ 
            usuario, token, rol, isAuthenticated: true 
        }),

    cerrarSesion: () => 
      set({ usuario: null, token: null, rol: null, isAuthenticated: false })
    }),
    {
        name: "auth-storage",
        partialize: (state) => ({
          token: state.token,
          isAuthenticated: state.isAuthenticated,
          rol: state.rol,
        }),
    }
  )
);

export default useAuthStore;
