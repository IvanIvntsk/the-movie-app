import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {movieActions} from "../../redux/slices/slices";
import css from './SearchingMovie.module.css'

const SearchingMovie = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {reset, register,handleSubmit} = useForm()
    const searchMovie = async (query) => {
        await dispatch(movieActions.searchMovie(query))
        navigate(`search/movie`)
        reset()
    }

    return (
        <form className={css.searching} onSubmit={handleSubmit(searchMovie)}>
            <input
            type={"text"}
            placeholder={"Search movie"}
            {...register("query")}
            />
            <button className={css.button}>Search</button>
        </form>
    );
};

export default SearchingMovie;