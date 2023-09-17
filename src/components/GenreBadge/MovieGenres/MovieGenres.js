import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../../redux/slices/slices";
import {useParams} from "react-router-dom";
import MoviesList from "../../MoviesList/MoviesList";


const MovieGenres = () => {
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state.movieReducer)
    console.log(genres);
    const {id} = useParams()
    useEffect(() => {
        dispatch(movieActions.getMoviesGenres({id}))
    },[])

    return (
        <div>
            {genres?.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
        </div>
    );
};


export default MovieGenres;