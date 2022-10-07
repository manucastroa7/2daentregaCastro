import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return <ul>
        <li><Link to={'/'}>Brand</Link></li>
        <li><Link to={'/category/catalogo'}>Categoria</Link></li>
        <li><Link to={'/item/detalle'}> Detalle Producto</Link></li>
    </ul>
}

export default Navbar