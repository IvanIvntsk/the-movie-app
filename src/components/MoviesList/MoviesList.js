import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices/slices";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);
    console.log(movies);

    const [page,setPage] = useSearchParams({page:'1'})

    useEffect(()=> {
        dispatch(movieActions.getAll({page}))
    }, [page])

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
        </div>
    );
};

export default MoviesList;