import {apiServices} from "../apiServices/apiServices";
import {urls} from "../../constants/urls/urls";

const moviesServices = {
    getMovies: () => apiServices.get(urls.moviesList),
    getGenres: () => apiServices.get(urls.genresLis),
    geById : (id) => apiServices.get(`${urls.movieById}/${id}`)
}

export {moviesServices}