import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/slices";
import {useParams} from "react-router-dom";
import {w500PosterURL} from "../../constants/urls/urls";
import MovieInfoDetail from "./MovieInfoDetail";

const MovieInfo = () => {
        const dispatch = useDispatch()
        const {movieDetails} = useSelector(state => state.movieDetails)
        const {loading} = useSelector(state => state.movieDetails.loading)


    console.log(movieDetails);

        const {id} = useParams()

    useEffect(() => {
            dispatch(movieActions.getMovieById({id}))
        },[dispatch, id])

        if (loading) {
            return <div>Loading...</div>
        }

        if (!movieDetails) {
            return movieDetails
        }
    return (
        <div>

           <MovieInfoDetail movieDetails={movieDetails}/>

            {/*<img style={{width:250,display:"flex", flexWrap:"wrap", justifyContent:"space-between"}} src={`${w500PosterURL}${movieDetails.poster_path}`}/>*/}
            {/*{movieDetails.original_title}*/}
            {/*<h2>{movieDetails.vote_average}</h2>*/}
            {/*{movieDetails.release_date}*/}
            {/*{movieDetails.tagline}*/}

            {/*<button > Back</button>*/}
        </div>

    );
};

export default MovieInfo;