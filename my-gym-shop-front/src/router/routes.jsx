import { Routes, Route } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Tienda } from '../components/Tienda';
import { Faq } from '../components/Faq';
import { Contacto } from '../components/Contacto';
import { SobreNosotros } from '../components/SobreNosotros';
import { TerminosCondiciones } from '../components/TerminosCondiciones';
import { NotFound } from '../components/NotFound';


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
        </Routes>
    );
};

export default AppRoutes;