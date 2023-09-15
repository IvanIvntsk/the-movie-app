import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/slices";
import MoviesListCard from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {

    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movieReducer)
    // const [query, setQuery] = useSearchParams({page:'1'});

    // const page = query.get('page');

    useEffect(()=> {
        dispatch(movieActions.getAll())
    }, [])

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
        </div>
    );
};

export default MoviesList;