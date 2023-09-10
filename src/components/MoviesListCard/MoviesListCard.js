import React from 'react';

const MoviesListCard = ({movie}) => {
    const {id, original_title, overview} = movie
    return (
        <div>
            <div>{id}</div>
            <div>{original_title}</div>
            <div>{overview}</div>
        </div>
    );
};

export default MoviesListCard;