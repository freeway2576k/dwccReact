import { Routes, Route } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Tienda } from '../components/Tienda';
import { Faq } from '../components/Faq';
import { Contacto } from '../components/Contacto';
import { SobreNosotros } from '../components/SobreNosotros';
import { TerminosCondiciones } from '../components/TerminosCondiciones';
import { NotFound } from '../components/NotFound';
import { GestionUsuarios } from '../components/GestionUsuarios';
import { Login } from '../components/Login';
import { Registro } from '../components/Registro';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/sobre-nosotros' element={<SobreNosotros />} />
            <Route path='/terminos-y-condiciones' element={<TerminosCondiciones />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/gestion-usuarios' element={<GestionUsuarios />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registro />} />
        </Routes>
    );
};

export default AppRoutes;