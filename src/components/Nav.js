import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='Navbar'>
            <h1>Cloud Wine</h1>
            <div className='links'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Wines">Wines</NavLink>

                <NavLink to="/reds">Reds</NavLink>
                <NavLink to="/whites">Whites</NavLink>
        
            </div>
        </div>
    );
};

export default Nav;