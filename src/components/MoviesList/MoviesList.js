import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices/slices";
import MoviesListCard from "../MoviesListCard/MoviesListCard";


const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);

    console.log(movies)

    useEffect(()=> {
        dispatch(movieActions.getAll())
    }, [])

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
        </div>
    );
};

export default MoviesList;