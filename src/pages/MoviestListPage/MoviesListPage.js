import React, {useState} from 'react';

import MoviesList from "../../components/MoviesList/MoviesList";
import {useSelector} from "react-redux";

const MoviesListPage = () => {
    const {pages} = useSelector(state => state.movies)
    const [count, setCount] = useState(1)
    return (
        <div style={{columnCount:2, margin: "30px 200px"}}>
            <MoviesList/>
            <button onClick={() => setCount(prev => prev -1)}>Prev</button>
            <button onClick={() => setCount(prev => prev +1)}>Next</button>
        </div>
    );
};

export default MoviesListPage;