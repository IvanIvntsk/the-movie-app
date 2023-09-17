import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {w500PosterURL} from "../../constants/urls/urls";

import css from './MoviesListCard.module.css'
import StarRatings from "react-rating-stars-component";


const MoviesListCard = ({movie}) => {
    // console.log(movie);
    const {id, original_title, poster_path, vote_average} = movie
        const navigate = useNavigate();
        return (
            <div className={css.ListCard}>
                <h2>{original_title}</h2>
            <Link className={css.poster} onClick={()=>navigate(`/movie/${id}`)}>
                <img className={css.img} src={`${w500PosterURL}${poster_path}`}  alt={original_title}/>
            </Link>
                <br/>
                <h3>Ratings:</h3>{vote_average && <StarRatings
                starDimension="24px"
                starSpacing="13px"
                numberOfStars={10}
                starRatedColor="gold"
                name='Rating'
                size={"300px"}
                value={vote_average}
                />}

            </div>
        );
    };

export default MoviesListCard;