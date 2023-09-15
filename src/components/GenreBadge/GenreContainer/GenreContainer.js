import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const GenreContainer = ({genre}) => {
    const {id, name} = genre
    console.log(genre);
    const navigate = useNavigate()
    return (
        <ul >
            <Link onClick={()=>navigate(`/movies/genres/${id}`)}>{name}</Link>

        </ul>
    );
};

export default GenreContainer;