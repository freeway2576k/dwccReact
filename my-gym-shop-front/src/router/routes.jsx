import { Routes, Route } from 'react-router-dom'
import RutaProtegidaPorRol from '../components/RutaProtegidaPorRol';
import { Inicio } from '../components/Inicio'
import { Tienda } from '../components/Tienda';
import { Faq } from '../components/Faq';
import { Contacto } from '../components/Contacto';
import { SobreNosotros } from '../components/SobreNosotros';
import { TerminosCondiciones } from '../components/TerminosCondiciones';
import { NotFound } from '../components/NotFound';
import { GestionUsuarios } from '../components/GestionUsuarios';
import { GestionArticulos } from '../components/GestionArticulos';
import { Login } from '../components/Login';
import { Registro } from '../components/Registro';
import { NoAutorizado } from '../components/NoAutorizado';
import { Carrito } from '../components/Carrito';


const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas pa todos */}
            <Route path='/' element={<Inicio />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/sobre-nosotros' element={<SobreNosotros />} />
            <Route path='/terminos-y-condiciones' element={<TerminosCondiciones />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registro />} />
            <Route path='/no-autorizado' element={<NoAutorizado />} />
            {/* Rutas pa los Clientes */}
            <Route path='/tienda' element={<RutaProtegidaPorRol rolesPermitidos={['ADMIN','USER']}><Tienda /></RutaProtegidaPorRol>
             } />
             <Route path='/carrito' element={<RutaProtegidaPorRol rolesPermitidos={['ADMIN', 'USER']}><Carrito/></RutaProtegidaPorRol>}/>

            {/* Rutas pa los admins */}
            <Route path='/gestion-usuarios'element={<RutaProtegidaPorRol rolesPermitidos={['ADMIN']}><GestionUsuarios /></RutaProtegidaPorRol>
             }
             />
             <Route path='/gestion-articulos'element={<RutaProtegidaPorRol rolesPermitidos={['ADMIN']}><GestionArticulos /></RutaProtegidaPorRol>
             }
             />

        </Routes>
    );
};

export default AppRoutes;