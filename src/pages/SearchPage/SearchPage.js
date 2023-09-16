import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/slices";
import {w500PosterURL} from "../../constants/urls/urls";

const SearchPage = () => {
    const dispatch = useDispatch()
    const {searchResult} = useSelector(state => state.movieReducer)
    console.log(searchResult);
    const {query} = useParams()

    useEffect(() => {
        dispatch(movieActions.searchMovie({query}))
    },[])

    return (
        <ul>
            {searchResult.map((movie)=>(
                <li key={movie.id}>
                    {movie.title}
                   <img src={`${w500PosterURL}${movie.poster_path}`}/>
                </li>
            ))}
        </ul>
    );
};

export default SearchPage;