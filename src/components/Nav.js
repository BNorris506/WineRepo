import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h1>Nav bar</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Wines">Wines</NavLink>
        </div>
    );
};

export default Nav;