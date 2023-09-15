import React from 'react';

const MoviesGenres = ({movieGenre}) => {
    console.log(movieGenre);
        const {movies, genreName} = movieGenre
    return (
        <div>
            {movies}
            {genreName}
        </div>
    );
};

export default MoviesGenres;