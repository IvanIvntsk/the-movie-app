import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {movieActions} from "../../redux/slices/slices";

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
        <form onSubmit={handleSubmit(searchMovie)}>
            <input
            type={"text"}
            placeholder={"Search movie"}
            {...register("query")}
            />
            <button>Search</button>
        </form>
    );
};

export default SearchingMovie;