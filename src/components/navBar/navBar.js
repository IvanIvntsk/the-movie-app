import React from 'react';
import {Link} from "react-router-dom";
import SearchingMovie from "../SearchingMovie/SearchingMovie";
import css from './navBar.module.css'
const NavBar = () => {

    const buttons = [
        {
            label: 'Movies',
            route: '/movies'

        },
        {
            label: 'Genres',
            route: '/movies/genres'
        },

    ]
    return (
        <div className={css.main}>
            <h2>TMDB</h2>
            {buttons.map((button, index) =>
                <Link className={css.link} key={index} to={button.route}>
                    {button.label}
                </Link>)
            }

            <SearchingMovie/>
        </div>
    );
};

export default NavBar;
