import React from 'react';

const GenreContainer = ({genre}) => {
    console.log(genre);
    const {name} = genre
    return (
        <div>
            {name}
        </div>
    );
};

export default GenreContainer;