import React from 'react';
import {w500PosterURL} from "../../constants/urls/urls";
import {Link, useNavigate} from "react-router-dom";
import {links} from "../../constants/links/links";
import css from './MovieInfoDetail.module.css'
const MovieInfoDetail = ({movie}) => {
    const {poster_path, title, vote_average, release_date, tagline, genres, production_countries,vote_count} = movie
    const navigate = useNavigate()
    return (
        <div  className={css.detail}>
            <div>
                    <img src={`${w500PosterURL}${poster_path}`}
                         alt={title}/>
            </div>
            <button onClick={()=>navigate('/movies')}>Back to all movies</button>
            <div>
                <div>
                    {vote_average !== null && vote_average !== undefined && <>
                        <h3>Ratings:</h3>
                        {vote_average.toFixed(1)}
                        {vote_count}
                    </>}
                        <h3>Release date:</h3>
                    {release_date}
                        <h3>Tagline:</h3>
                        <p>{tagline}</p>

                    {genres.length ?
                        <>
                            <h3>Genre:</h3>
                            <div>
                                {genres.map((genre, index) => {
                                    return (
                                        <Link
                                              key={genre.name} to={`${links.GENRES}/${genre.name}/${genre.id}`}>
                                            {genre.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </> :
                        <></>
                    }
                    {movie.runtime !== null && movie.runtime !== undefined && <>
                        <h3>Runtime:</h3>
                        <p>{movie.runtime} min</p>
                    </>}
                    {production_countries && <>
                        <h3>Country:</h3>
                        <div>
                            {production_countries.map((country, index) => {
                                return <span key={country.name}>
                                    {index !== production_countries.length - 1 ?
                                        `${country.name}, ` :
                                        country.name
                                    }
                                </span>
                            })}
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default MovieInfoDetail;