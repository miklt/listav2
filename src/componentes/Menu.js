import React from 'react';
import {   
    Link    
  } from "react-router-dom";
const Menu = () => <nav >
    <ul>
        <li>
            <Link to="/">App</Link>
        </li>
        <li>
            <Link to="/sobre">Sobre</Link>
        </li>
    </ul>
</nav>
export default Menu;