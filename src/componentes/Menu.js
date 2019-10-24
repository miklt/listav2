import React from 'react';
import {   
    Link    
  } from "react-router-dom";
import '../App.css'
const Menu = () => <div className="menu">
    <nav >
        <ul>
        <li>
            <Link to="/">App</Link>
        </li>
        <li>
            <Link to="/sobre">Sobre</Link>
        </li>
    </ul>
</nav>
</div>

export default Menu;