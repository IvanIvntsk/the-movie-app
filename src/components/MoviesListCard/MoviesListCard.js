import React from 'react';
import {useNavigate} from "react-router-dom";
import {w500PosterURL} from "../../constants/urls/urls";


const MoviesListCard = ({movie}) => {
    // console.log(movie);
    const {id, original_title, poster_path, vote_average} = movie
        const navigate = useNavigate();
        return (
            <div>
                {original_title}
            <div onClick={()=>navigate(`/movie/${id}`)}>
                <img style={{fontSize:"100px"}} src={`${w500PosterURL}${poster_path}`}  alt={original_title}/>
                <br/>
                {/*<StarRating vote_average={vote_average}/>*/}
            </div>
            </div>
        );
    };

export default MoviesListCard;