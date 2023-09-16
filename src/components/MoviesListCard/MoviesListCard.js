import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {w500PosterURL} from "../../constants/urls/urls";
import StarRating from "../StarsRating/StarRating";


const MoviesListCard = ({movie}) => {
    // console.log(movie);
    const {id, original_title, poster_path, vote_average} = movie
        const navigate = useNavigate();
        return (
            <div>
                {original_title}
            <Link onClick={()=>navigate(`/movie/${id}`)}>>
                <img src={`${w500PosterURL}${poster_path}`}  alt={original_title}/>

            </Link>
                <br/>

                {/*<StarRating vote_average={vote_average}/>*/}

            </div>
        );
    };

export default MoviesListCard;