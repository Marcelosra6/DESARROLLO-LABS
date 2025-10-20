import { Link } from 'react-router-dom';
export const Inicio = () => {
    return (
        <div>
            <h2>Bienvenido(a) a este blog</h2>
            <Route path="/Articulos/:id" element={<Detalle />} />
        </div>
    );
};
