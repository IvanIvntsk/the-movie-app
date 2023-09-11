import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genders'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>
        </div>
    );
};

export default Header;