import { create } from 'zustand';

const useAuthStore = create((set) => ({
    usuario: null,
    token:null,

    iniciarSesion: (usuario, token) => set({ usuario, token }),

    cerrarSesion: () =>{
        set({ usuario: null, token: null })
        localStorage.removeItem('usuario');
    },

    establecerToken: () => {
        const token = localStorage.getItem('token');
        if (token) {
            set({ token });
        }
    }
}));

export default useAuthStore;