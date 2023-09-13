import React from 'react';
import {w500PosterURL} from "../../constants/urls/urls";
import StarRating from "../StarsRating/StarRating";
import MoviesGenrePage from "../../pages/MoviesGenrePage/MoviesGenrePage";

const MovieInfoDetail = ({movieDetails}) => {
    const {title, poster_path, overview, vote_avenger, genres} = movieDetails
    return (
        <div >
            {title}
            <img style={{height:500, width:300, display:"flex", flexWrap:"wrap", justifyContent:"space-between"}} src={`${w500PosterURL}${poster_path}`}/>
            <div>{overview}</div>
            <div>StarRating{vote_avenger}</div>
            <div><MoviesGenrePage/></div>
        </div>
    );
};

export default MovieInfoDetail;