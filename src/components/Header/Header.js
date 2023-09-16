import React from 'react';
import {NavLink} from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";

const Header = () => {

    return (
        <div >
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'movies/genres'}>Genres</NavLink>
            <NavLink to={'search/movie'}>Search</NavLink>
            <UserInfo/>
        </div>
    );
};

export default Header;