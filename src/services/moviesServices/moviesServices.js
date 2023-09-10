import {apiServices} from "../apiServices/apiServices";
import {urls} from "../../constants/urls/urls";

const moviesServices = {
    getMovies: () => apiServices.get(urls.moviesList)
}

export {moviesServices}