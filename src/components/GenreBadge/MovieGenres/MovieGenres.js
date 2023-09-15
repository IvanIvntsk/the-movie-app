import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../../redux/slices/slices";
import {useParams} from "react-router-dom";
import MoviesGenres from "./MoviesGenres";

const MovieGenres = () => {
    const dispatch = useDispatch()
    const {moviesGenres} = useSelector(state => state.movieReducer)
    const {id} = useParams()
    useEffect(()=> {
        dispatch(movieActions.getMovieById({id}))
    },[])
    return (
        <div>
            {moviesGenres?.map(movieGenre => <MoviesGenres key={movieGenre.id} movieGenre={movieGenre}/>)}
        </div>
    );
};

export default MovieGenres;