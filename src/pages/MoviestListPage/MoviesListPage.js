import React, {useState} from 'react';

import MoviesList from "../../components/MoviesList/MoviesList";
import {useSelector} from "react-redux";

const MoviesListPage = () => {

    return (
        <div>
            <MoviesList/>
        </div>
    );
};

export default MoviesListPage;