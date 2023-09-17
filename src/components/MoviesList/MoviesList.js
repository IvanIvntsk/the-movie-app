import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux/slices/slices";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {useParams} from "react-router-dom";

const MoviesList = () => {

    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movieReducer)
    const {page} = useParams()

    // const page = query.get('page');

    useEffect(()=> {
        dispatch(movieActions .getAll({page}))
    }, [])

    return (
        <div style={{

        }}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
           </div>
    );
};

export default MoviesList;