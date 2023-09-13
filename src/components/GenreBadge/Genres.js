import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/slices";
import GenreContainer from "./GenreContainer/GenreContainer";

const Genres = () => {
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state.genres)
    console.log(genres);
    useEffect(()=>{
        dispatch(movieActions.getGenres())
    },[])

    return (
        <div>
            {genres.map(genre => <GenreContainer key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;