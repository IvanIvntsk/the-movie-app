import React from 'react';

const GenreList = ({genre}) => {
    const {title} = genre
    return (
        <div>
            {title}
        </div>
    );
};

export default GenreList;