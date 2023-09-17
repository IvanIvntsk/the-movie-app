import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import css from './GenreContainer.module.css'
const GenreContainer = ({genre}) => {
    const {id, name} = genre
    console.log(genre);
    const navigate = useNavigate()
    return (
        <ul className={css.Genres}>
            <Link onClick={()=>navigate(`/movies/genres/${id}`)}>{name}</Link>

        </ul>
    );
};

export default GenreContainer;