import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/slices";
import {useParams} from "react-router-dom";
import MovieInfoDetail from "./MovieInfoDetail";

const MovieInfo = () => {
    const dispatch = useDispatch()
    const {movie} = useSelector(state => state.movieReducer)

    const {id} = useParams()

    useEffect(() => {
        dispatch(movieActions.getMovieById({id}))
    }, [])

    return (
        <div>

            {movie && <MovieInfoDetail key={movie.id} movie={movie}/>}

        </div>
    );
};

export default MovieInfo;