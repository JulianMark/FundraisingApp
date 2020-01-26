import React from 'react';
import {Link} from 'react-router-dom'

const Menu = () => (
    <nav id='menu'>
        <Link to= '/'>
            Usuarios
        </Link>
        <Link to= '/work'>
            Tareas
        </Link>
        <Link to= '/campaigns'>
            Campañas
        </Link>
    </nav>
);

export default Menu;